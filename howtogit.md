Step 1: The command line
To use git, one must use the command line. The command line can appear big and scary, like peering into a deep black ocean, but have no fear. The command line is in fact quite dumb and we can easily outsmart it.

Lets see what's actually on the screen:
11:40 phili@DESKTOP-8T80J: ~ $
11:40 phili@DESKTOP-8T80J: ~ $ git clone git@github.com:dwmodem/dune.git 

To understand this, lets look at
## THE AXIOMS OF THE COMMAND LINE
(An axiom is, in a nutshell, a very important nugget of truth)


###First axiom of the command line:

'THINGS'  ARE SEPARATED BY SPACES

Lets have a look at my command line here:

`11:40 phili@DESKTOP-8T80J: ~ $ git clone git@github.com:dwmodem/dune.git`

So what 'THINGS' is it made of? Lets make a list of all things separated by spaces:

11:40                              <- Thats the time
phili@DESKTOP-8T80J:               <- Thats the user I am, and the computer I am on. Hi! My name is Phil, and my computer is DESKTOP-8T80J.
~                                  <- Programmers really like to shorten things. It's their favorite thing, This is where in the filestructure our command will be run. Tilde (~) is short for our user's home directory. 
$                                  <- This dollar sign signifies that anything after here will be run as a command
git                                <- What we want the computer to execute
clone                              <- What we want _git_ to execute
git@github.com:dwmodem/dune.git    <- What git repository want to _clone_


###Second axiom of the command line:

ANYTHING BEFORE THE FIRST '$' IS NOT IMPORTANT

Anything before the first '$' is just neat information about the computer we're on that whoever set up the computer thought would be nice to have. Not currently important for giving the computer commands.

Anything _after_ the first '$' is going to be THE COMMAND itself.



###Third axiom of the command line:

THE FIRST 'THING' IN THE COMMAND IS THE PROGRAM WE ARE CALLING

`$ git clone git@github.com:dwmodem/dune.git`


The first thing in our command is _always_ the program. 
The first thing the computer does with your command is take the first 'thing' or 'word' and look through a list of the programs it's allowed to run and see if that word matches the name of a program.

Hint: 'Things' are just text separated by whitespace. (Spaces, tabs...)

If it finds one, then it runs it! Otherwise, it tells you it doesn't understand what you're saying.
If you're curious, you can run the program `which` to see if a program is installed, and where it is.

```
12:15 phili@DESKTOP-8T80J: ~ $ which git
/cygdrive/c/Program Files/Git/cmd/git
```
In which case we are running the program `which` to see if the program `git` is installed. Which it is! It is installed in the directory which we decided to install it to.



# Lets use git

Run the command:
```
git clone git@github.com:dwmodem/dune.git
```