# CZ-Parallax jQuery Plugin

Simple and tiny jQuery plugin for Parallax effect.

## Description
This simple plugin is easy to use and with it you can create Parallax effect on any div you want, with as many layers as you want. There are several options (such as speed, zoom level, axis lock) with which you can adjust the plugin to your needs. Also, it is tiny - just **795 bytes** gzipped or **1.59KB** without gzip (minified version).

## Demo
* Please see demo.html
* For live demo see [JSFiddle](https://jsfiddle.net/gqvuyw8r/)

## Requrements
* jQuery 1.9.1+

## Installation
* Include necessary JS files

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="path-to-file/MM-Parallax_jQuery-min.js"></script>
```

## Options

### fg
* **Description**: Foreground image link. Only one image link is required.
* **Data type**: string
* **Default value**: none
* **Required**: yes
* **Example value**: https://somewebsite.com/someimage.png

### bgs
* **Description**: Background image links. At least one is required, several can be added.
* **Data type**: array
* **Default value**: none
* **Required**: yes
* **Example value**: ['https://somewebsite.com/someimage.png', 'https://somewebsite.com/someimage2.png', 'https://somewebsite.com/someimage3.png']

### speed
* **Description**: Speed of image movement. Foreground and first background layer images will move in this speed, each additional background layer will move slower than the previous one.
* **Data type**: integer/float
* **Default value**: 1
* **Required**: no
* **Example value**: 1.2 || 3 || .7

### fgZoom
* **Description**: Foreground image zoom. Zoom is useful when using image that covers the div, in order to cover whole div even when moving around. 
* **Data type**: integer/float
* **Default value**: 1
* **Required**: no
* **Example value**: 1.2 || 3 || .7

### bgZoom
* **Description**: Background layers image zoom. Zoom is useful when using image that covers the div, in order to cover whole div even when moving around. 
* **Data type**: integer/float
* **Default value**: 1.05
* **Required**: no
* **Example value**: 1.2 || 3 || .7

### lock
* **Description**: Locking movement to only one axis. By default, it is unlocked - movement is available to both X and Y axis.
* **Data type**: string
* **Default value**: none
* **Required**: no
* **Example value**: 'x' || 'X' || 'y' || 'Y'

## Usage
Example code:

```
    // Minimum setup with only required options
    $('#some-element').CZParallax({
        fg: 'https://somewebsite.com/foreground-image.png',
        bgs: ['https://somewebsite.com/background-image.png']
    });

    // Setup with all options set
    $('#some-element').CZParallax({
        fg: 'https://somewebsite.com/foreground-image.png',
        bgs: [
            'https://somewebsite.com/background-image.png',
            'https://somewebsite.com/background-image2.png',
            'https://somewebsite.com/background-image3.png'
        ],
        speed: 2.5,
        fgZoom: 1.1,
        bgZoom: 1.5,
        lock: 'x'
    });
```

## Licence

The expandable plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2019 Mirza Mašić
