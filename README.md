# `enkanomiya`
> Enkanomiya (Japanese: 淵えん下か宮のみや "Abyssal Depths Palace"), originally known as Byakuya no Kuni (Japanese: 白夜国 "Land of the White Night, Midnight Sun"), is a location near Sangonomiya Shrine. It can be entered via a deep pool, and legend has it that the Watatsumi people originated from here.

(from the [Genshin Impact Wiki article](https://genshin-impact.fandom.com/wiki/Enkanomiya))

A quick and dirty way to calculate CV (Crit Value) for artifacts in the game [Genshin Impact](https://genshin.mihoyo.com). 

# How does it work, and why?
How it works: CV is calculated using the Crit DMG (CD) and Crit Rate (CR) of an artifact. The formula is as follows: `CD + (CR*2)`. Very simple, actually.

But why would I make a whole fucking web application for this you ask? Well, reasons. The 1st one being I'm super lazy and don't feel like remembering things and doing math. The 2nd one being I needed projects to do, and this seemed fun.

The image below shows the idea behind this measurement:

![](https://media.discordapp.net/attachments/884099555073859634/884104408160407552/CV-1.png?width=500&height=357)

## Development shit

Depending on what you want to do, here's the commands you'll want to run:

|Action               |Command             |
|---------------------|--------------------|
|Install dependencies | `npm i`            |
|Run dev server       | `npm run dev` [1]  |
|Build for production | `npm run build`    |
|Run linter           | `npm run lint`     |

Contributions are welcome, although I am confident this project will not need many, if at all.

[1] you can also use `yarn run serve`, but i much prefer using `dev` myself lol