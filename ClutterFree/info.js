/**
 * .JS because I like the santax highlighting
 */

var Constants = {
      popular: {
        aspectRatios: [
          4:3
          5:4
          16:9
          16:10
        ],
        sizes: [
          // http://www.lochnesswatergardens.com/pondblog
          // common-desktop-resolutions/
          800x600
          1024x768
          1280x1024
          2560x2048
        ]
      }
    };
//http://ux.stackexchange.com/questions/23512/screen-sizes-how-do-we-determine-standards-and-what-are-they
Screensizes: (market size in %)

1366x768 - 20.5%
1024x768 - 17.43%
1280x800 - 12.24%
1280x1024 - 7.16%
1440x900 - 6.47%
1920x1080 - 5.57%
Width percentages: (market size in %)

1920+ - 7.06%
1440-1680 - 14.13%
1280-1366 - 46.37%
1024-1152 - 21.71%
768-800 - 3.23%


//http://stackoverflow.com/questions/3842500/how-to-calculate-screen-resolution-change
//http://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio-i-need-an-output-like-43-169
var PopularSizes = {
  //http://graphicdesign.stackexchange.com/questions/6663/what-resolutions-are-standard-for-digital-device-wallpaper-designs
  320 x 480 is a very common resolution for mobile phones.

Here is a big list of a lot of phones and their resolutions. Maybe it'll help give you an idea of what's out there.

For desktops

Full Screen:

800 x 600
1024 x 768
1280 x 960
1280 x 1024
1600 x 1200
Widescreen:

1280 x 720
1280 x 800
1440 x 900
1680 x 1050
1920 x 1080
1920 x 1200
1024 x 768, 1280 x 1024, 1920 x 1080 are pretty common to the best of my knowledge. But obviously the more resolutions you support, the more compatible your wallpaper becomes -- the drawback is that it requires more work for you.
It really depends on screen size most of the wallpaper designer provide there art in different sizes to look better in each screen though you can take a minimum to maximum size variant

Normal wallpaper has resolution of 1024x768 and screen ratio of 4:3. I assume More than 70% of users have such monitors.

HD wallpaper have 1366x768 and screen ratio of 16:9

so if you consider both you can cover the maximum.

Display resolution
See if these links help :

Create wallpaper for various display
Wallpaper Resolution
if you google a bit you can get a good amount of information on this.


//http://graphicdesign.stackexchange.com/questions/17704/best-image-dimensions-for-downloadable-wallpaper-for-pc-hd-mobile-and-tablet
The classical proportion

The classical (oldie) porportion for desktops is 4:3 for example.

1024x768
1280x960
1600x1200
Some pads use this same proportion for example the ipad uses:

2048x1536
Vertical orientatnion

This takes us that this pads used in vertical orientation gives us a 3:4 proportion which would be inverting the values.

768x1024 for example
The widescreen

The main proportion is 16:9

1920x1080
1366x768
1280x720
You have the same case if you want a vertical orientation 9:16

Variations

There are a lot of variations in proportions and resolutions. You can take a look of them on this image from the wikipedia (the circles show the proportion):


};
