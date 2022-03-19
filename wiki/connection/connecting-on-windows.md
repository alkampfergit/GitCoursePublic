# Connecting to remote in Windows

You usualy use **Git For Windows** that comes with a Credential manager that is capable to connect to the most common Git server (Azure Devops, GitHub, BitBucket). This extensions usually creates a **Personal Access Token on the server and stores it in the Credential Manager**. 

To troubleshoot authentication problems in Windows (such as your command line continues to fail login and does not show you the standard login window) just open the credential manager and **delete all cached credentials for the server you are connecting to**.