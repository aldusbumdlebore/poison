// htop by https://www.greyrepo.xyz/posts/7
// but always watching, but being ressource efficient by caching

// modified to hide rshell's

globals.last_output = ""
while true
    computer = get_shell.host_computer
    bar = function(n, bar_length = 35)
    // percentage number
    fill_count = ceil(n / bar_length * 10)
    empty_count = bar_length - fill_count
    fill_bar = "#"*fill_count
    empty_bar = "-"*empty_count
    bar = "<color=#21bcff>"+fill_bar+"</color><color=#032e41>"+empty_bar+"</color>"
    return bar
    end function
    ps_out = computer.show_procs
    tasks = {}
    cpu_load = 0.0
    mem_load = 0.0
    // convert ps output to a map
    counter = 0
    for line in ps_out.split("\n")[1:]
        line = line.split(" ")
        if line[4] == "bumdlebore" then continue // hide rshell name here
        task = {"user": line[0], "pid": line[1], "cpu": line[2], "mem": line[3], "command": line[4]}
        cpu_load = cpu_load + task["cpu"][:-1].val
        mem_load = mem_load + task["mem"][:-1].val
        if task["user"] == "root" then
            task["user"] = "<color=#ff4b4b>"+task["user"]+"</color>"
        else
            task["user"] = "<color=#fbfbfb>"+task["user"]+"</color>"
        end if
        task["pid"] = "<color=#20ff98>"+task["pid"]+"</color>"
        task["cpu"] = "<color=#21bcff>"+task["cpu"]+"</color>"
        task["mem"] = "<color=#21bcff>"+task["mem"]+"</color>"
        task["command"] = "<color=#baff50>"+task["command"]+"</color>"
        tasks[counter] = task
        counter = counter + 1
    end for
    hps = []
    hps.push("<color=#fbfbfb>tasks: "+tasks.len+"</color>")
    hps.push("<color=#fbfbfb>cpu_usage: [</color>"+bar(cpu_load)+"<color=#fbfbfb>]==[ </color><color=#21bcff>"+cpu_load+"%</color> <color=#fbfbfb>]</color>")
    hps.push("<color=#fbfbfb>mem_usage: [</color>"+bar(mem_load)+"<color=#fbfbfb>]==[ </color><color=#21bcff>"+mem_load+"%</color> <color=#fbfbfb>]</color>")
    pps = []
    pps.push("<color=#9d9d9d>USER</color> <color=#9d9d9d>PID</color> <color=#9d9d9d>CPU</color> <color=#9d9d9d>MEM</color> <color=#9d9d9d>COLOR</color>")
    for task in tasks
        v = task["value"]
        line = [v["user"], v["pid"], v["cpu"], v["mem"], v["command"]]
        pps.push(line.join(" "))
    end for
        output_hps = hps.join("\n")
        output_pps = pps.join("\n")
    if globals.last_output != output_hps + output_pps then
        clear_screen
        print(output_hps)
        print(format_columns(output_pps))
        globals.last_output = output_hps + output_pps
    end if
    wait(1)
end while