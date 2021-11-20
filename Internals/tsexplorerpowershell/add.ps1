Param
(
    [string] $fileName,
    [string] $outputFileName
)

Function Gzip([string]$InputFile){
 
    $filePath = Split-Path $InputFile
    $fileHash = Get-FileHash -Algorithm SHA1 $outputFileName
    $newFileName = Join-Path $filePath $fileHash.Hash
 
    Write-Output "New File name $newFileName"
    if (Test-Path -Path $newFileName)
    {
        Remove-Item -Path $newFileName
    }
    $fileInfo = Get-Item $InputFile

    $srcFileStream = New-Object System.IO.FileStream($fileInfo.FullName,([IO.FileMode]::Open),([IO.FileAccess]::Read),([IO.FileShare]::Read))
    $dstFileStream = New-Object System.IO.FileStream($newFileName,([IO.FileMode]::Create),([IO.FileAccess]::Write),([IO.FileShare]::None))
    $gzip = New-Object System.IO.Compression.GZipStream($dstFileStream,[System.IO.Compression.CompressionMode]::Compress)
    $srcFileStream.CopyTo($gzip)

    $gzip.Close()
    $srcFileStream.Close()
    $dstFileStream.Close()
}

$content = [System.IO.File]::ReadAllBytes($fileName)
$size = (Get-ChildItem -Path $fileName).Length
$header = "blob $size"
Set-Content -Path $outputFileName -Value $header -Encoding Ascii -NoNewline
$terminator = [byte[]] 0
Add-Content -Path $outputFileName -Encoding Byte -Value $terminator -NoNewline
Add-Content -Path $outputFileName -Encoding Byte -Value $content -NoNewline

Get-FileHash -Algorithm SHA1 $outputFileName
Gzip $outputFileName
