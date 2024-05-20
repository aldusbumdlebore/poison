//command: ps
if params.len > 0 then exit(command_info("ps_usage"))
procs = get_shell.host_computer.show_procs
sprocs = procs.split("\n")
sub = null
output = function()
    for proc in sprocs
        qprocs = proc.split(" ")
        if not qprocs[4] == "bumdlebore" then
            globals.sub = globals.sub + (proc + "\n")
        else
            continue
        end if
    end for
    return globals.sub
end function
print(format_columns(output))
