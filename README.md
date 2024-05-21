# poison

The code in this repostory is likely broken or
otherwise unusable as-is as im not much of a
coder, and there could be errors, or my own
personal ignorance with the API. 
plus some things require manual editing to make
them work.

This Repository is for poisoned source for /bin/ binaries
Hopefully with a little bit of strategy.

kill.gs and ps.gs are intended to be used together.
If you manage to get a root shell object on their computer
you can pre-compile these and upload and replace the originals

ps.gs behaves like the default ps command, however
it hides your rshell process.

kill.gs, if for any reason the player replaces their ps command
they will likely kill your rshell after seeing the process.
when they run the kill command it will start a new rshell prcoess.
I am currently working out a way to also have kill build and install
the poison ps as well, but im not sure if im capable or if its possible

