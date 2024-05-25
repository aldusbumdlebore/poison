// Made by aldusbumdlebore
// 05 / 20 / 2024
//command: ps
if params.len > 0 then exit(command_info("ps_usage"))
procs = get_shell.host_computer.show_procs.split("\n")
filtered_procs = ""
for proc in procs
    parts = proc.split(" ")
    if parts[4] != "bumdlebore" then filtered_procs = filtered_procs + proc + "\n"
end for
print(format_columns(filtered_procs))
