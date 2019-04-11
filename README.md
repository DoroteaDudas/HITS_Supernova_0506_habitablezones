# 0506 - Habitable Zones

## Short Description

<table align="center">
    <tr>
    <td align="left" style="font-style:italic; font-size:12px; background-color:white">Make the planet habitable!<br>
Liquid water, which can only exist within the habitable zone around the star, is essential for life.<br>
Move the planet and stabilize its orbit in this green zone. 
How does the zone change around a hot or a cool star?
</td>
    </tr>
</table>

The application shows a habitable zone (the green area) around a star and a planet orbiting the star. Life depends on liquid water which exists within the habitable zone around a star. 
The influence of a habitable zone on the planet’s atmosphere can be seen by changing the trajectory of the planet’s orbit. The planet has liquid water (i.e sustains life) within the habitable zone, but, depending on the distance from a star, dries out or freezes outside of the habitable zone. The user can try to achieve a stable orbit within a habitable zone. It can be observed how the location of the habitable zone depends on the mass of a chosen star. The orbit of the planet also depends on the star’s mass i.e. the star’s gravitational force.

The planet’s orbit can be changed by pulling the arrow that represents the planet’s momentum. The planet's climate and current temperature can be observed within the upper left corner of the screen. Three different types of stars can be chosen, a massive (hot, blue) star, a sun-like (yellow) star or a low-mass (cooler, red) star (see the details below). The main view can be rotated and zoomed (using two fingers / mouse wheel). Three buttons in the lower left corner allow the user to restart the application, change the language (English or German) and get some help. 

Note that the size and distance ratios of the planet and the stars in this application are wrong, as we would not be able to achieve the desired learning effect. 

This application is used at the [ESO Supernova Planetarium and Visitor Centre](https://supernova.eso.org/?lang=en), Garching b. München.  
For more details about the project and how applications are run and managed within the exhibition please see [this link](https://gitlab.com/HITS_Supernova/overview).   


## Requirements / How-To

A browser with a WebGL support is needed to run the interactive (start `WebGL/webgl_HabitableZones.html`).  
If no touchscreen is available the interactive can be operated with the mouse.

## Detailed Information

#### URL parameters

*lang* - language parameter (english as default if not there)

#### Used star parameters

The following stars were used as examples in the interactive:  

1) Sun-like (yellow) star: The Sun  

* Distance from Earth: 1 AU* = 0.000016 light years 
* G2 main sequence star 
* Surface temperature: 5500 °C
* Luminosity: 3,8 x 1026 W
* Mass: 2 x 1030 kg
* Habitable Zone between 0.95 and 1.7 AU

2) Low-mass (cooler, red) star: ε Eridani  

* Distance from Earth: 10 light years
* K2 main sequence star
* Surface temperature: 4800 °C
* Luminosity: 0.28 solar luminosities
* Mass: 0.85 solar masses
* Habitable Zone between 0.5 and 0.89 AU
* 1 planet observed (but unconfirmed): ε Eri b
    * Average distance from central star: 3.4 AU
    * 1.5 times mass of Jupiter
    * Orbital period 6.9 years

3) Massive (hot, blue) star: θ Bootis  

* Distance from Earth: 47 light years
* F7 main sequence star
* Surface temperature: 6000 °C
* Luminosity: 4.4 solar luminosities
* Mass: 1.5 solar masses
* Habitable Zone between 2.0 and 3.5 AU

*) 1 AU = 150 million km ("Astronomical Unit", the average distance from Earth to Sun)



## Credits

This application was developed by the ESO Supernova team at [HITS gGmbH](https://www.h-its.org/en/).  
Idea by Dorotea Dudas and Volker Gaibler, HITS gGmbH.  
Application by Dorotea Dudas.  

#### Code Licensing

* This code is licensed as: [MIT license](LICENSE)
* MIT license:
    * *ShaderParticles.js* by Luke Moody & Lee Stemkoski [ShaderParticleEngine@GitHub](https://github.com/squarefeet/ShaderParticleEngine)
    * *Three.js* by Mr.doob (Ricardo Cabello) [source](https://threejs.org/)
    * *jQuery* [source](https://jquery.com/)
    * *Star shader* by Dorotea Dudas using:
        * *Lava shader* from [source](https://threejs.org/examples/webgl_shader_lava.html) (MIT license)
    * *Habitable zones shader* by Dorotea Dudas using:
        * *Lava shader* from [source](https://threejs.org/examples/webgl_shader_lava.html) (MIT license)


#### Image Licensing

* CC BY 4.0:
    * Earth image provided by ESO
    * Optical Milky Way image: original file by S. Brunier [source at ESO](https://www.eso.org/public/images/eso0932a/)
    * Made by Dorotea Dudas:
        * Sprite and grid texture 
        * Sprite3, sprite4, sprite5 textures (original from AsterTank: [GitHub](https://github.com/typpo/asterank) [image](https://github.com/typpo/asterank/tree/master/static/img) (MIT License))
        * Icons (except blue navigation icons)
    * Info/Help Screen images by ESO / HITS gGmbH
    * Blue Navigation icons by Design und mehr GmbH    
* Dry Earth image from [The Celestia Motherlode](http://www.celestiamotherlode.net/) [image](http://www.celestiamotherlode.net/catalog/show_addon_details.php?addon_id=1010) (Creative Commons)
* Smoke texture from ShaderParticleEngine [image](https://github.com/squarefeet/ShaderParticleEngine/blob/master/examples/img/smokeparticle.png) (MIT License)
* Cloud, lava textures (derivatives by Dorotea Dudas) from three.js [image](https://github.com/mrdoob/three.js/tree/dev/examples/textures/lava) (MIT License)
* Snow texture [source](http://seamless-pixels.blogspot.de/2012/09/free-seamless-stucco-wall-plaster.html) [image](http://4.bp.blogspot.com/-5xNMmxVjWKg/UA5bNp_0jaI/AAAAAAAAB4s/QXcwBUUPPKw/s1600/Seamless+wall+white+paint+stucco+plaster+texture.jpg)  (free)









