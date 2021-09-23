# The original idea behind the sliders was... well...
having them have an absurd amount of ticks, because I thought that sliders worked differently. Like I could just have them snap to the numbers in the array as I dragged it. Reality is often disappointing, though. But it was fun!

![](img/msedge_L34S7XmWcJ.png)

In order to make this happen, I needed to calculate all possible CRIT Rates (and CRIT DMGs) for a 5* artifact. That's basically taking the initial rolls, adding them to each other, and repeating until we get to the 6th roll, or level 20. (well, this description might be questionable but you'll get what I mean soon).

# But... how?

First of all, a massive fucking shoutout to the (C)Python devs holy shit I could not have survived doing this any other way.

In the beginning I did all this math manually, but I found many mistakes afterwards and decided to do a little bit of "automation", if you could call it that. I simply wrote a Python function to use in the interpreter.

```py
def func(n):
    # This is for CRIT Rate, but it is easily adapted to Crit DMG's formula, obviously.
    return [n+2.7, n+3.1, n+3.5, n+3.8]
```

From there things got much simpler. For example, let's generate the possible CRIT Rate percentages from leveling an artifact to +4:

```py
>>> p = [] # this is our dict, where the final result will be
>>> for n in [2.7, 3.1, 3.5, 3.8]: # initial roll percentages
...     for o in func(n): # get all the numbers from the function's returned dict
...             p.append(round(o, 1)) # append them to our dict
...                                                                         
>>> p = list(dict.fromkeys(p)) # shake out the duplicates
>>> print(p)
[5.4, 5.8, 6.2, 6.5, 6.6, 6.9, 7.0, 7.3, 7.6] # there we go!
```

Much of the burden of manually calculating all of the numbers has been removed thanks to that simple function. God, I love Python.

*If you'd like to play around with this function, there's a `calc.py` in this directory with easily changeable variables. Have fun!*

# The final numbers
CRIT Rate:
```py
[
    2.7, 3.1, 3.5, 3.8, # initial
    5.4, 5.8, 6.2, 6.5, 6.6, 6.9, 7.0, 7.3, 7.6, # +4
    8.1, 8.5, 8.9, 9.2, 9.3, 9.6, 9.7, 10.0, 10.3, 10.1, 10.4, 10.7, 10.5, 10.8, 11.1, 11.4, # +8
    10.8, 11.2, 11.6, 11.9, 12.0, 12.3, 12.4, 12.7, 13.0, 12.8, 13.1, 13.4, 13.2, 13.5, 13.8, 14.1, 13.6, 13.9, 14.2, 14.5, 14.0, 14.3, 14.6, 14.9, 15.2, # +12
    13.5, 13.9, 14.3, 14.6, 14.7, 15.0, 15.1, 15.4, 15.7, 15.5, 15.8, 16.1, 15.9, 16.2, 16.5, 16.8, 16.3, 16.6, 16.9, 17.2, 16.7, 17.0, 17.3, 17.6, 17.9, 17.1, 17.4, 17.7, 18.0, 18.3, 17.5, 17.8, 18.1, 18.4, 18.7, 19.0, # +16
    16.2, 16.6, 17.0, 17.3, 17.4, 17.7, 17.8, 18.1, 18.4, 18.2, 18.5, 18.8, 18.6, 18.9, 19.2, 19.5, 19.0, 19.3, 19.6, 19.9, 19.4, 19.7, 20.0, 20.3, 20.6, 19.8, 20.1, 20.4, 20.7, 21.0, 20.2, 20.5, 20.8, 21.1, 21.4, 21.7, 20.9, 21.2, 21.5, 21.8, 22.1, 21.3, 21.6, 21.9, 22.2, 22.5, 22.8 # +20
]
```

CRIT DMG:
```py
[
    5.4, 6.2, 7, 7.8, # initial
    10.8, 11.6, 12.4, 13.2, 14.0, 14.8, 15.6, # +4
    16.2, 17.0, 17.8, 18.6, 19.4, 20.2, 21.0, 21.8, 22.6, 23.4, # +8
    21.6, 22.4, 23.2, 24.0, 24.8, 25.6, 26.4, 27.2, 28.0, 28.8, 29.6, 30.4, 31.2, # +12
    27.0, 27.8, 28.6, 29.4, 30.2, 31.0, 31.8, 32.6, 33.4, 34.2, 35.0, 35.8, 36.6, 37.4, 38.2, 39.0, # +16
    32.4, 33.2, 34.0, 34.8, 35.6, 36.4, 37.2, 38.0, 38.8, 39.6, 40.4, 41.2, 42.0, 42.8, 43.6, 44.4, 45.2, 46.0, 46.8 # +20
]
```