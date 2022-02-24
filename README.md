# Canvas LMS BigBlueButton Download and Embed Buttons Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that
adds buttons to show a BigBlueButton conference recording in a pop-up window.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-bbb-recording-popup-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-recording-popup-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-bbb-recording-popup-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-bbb-recording-popup-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-recording-popup-plugin)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-bbb-recording-popup-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-bbb-recording-popup-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import bbbRecordingPopupPlugin from '@artevelde-uas/canvas-lms-bbb-recording-popup-plugin';

addPlugin(bbbRecordingPopupPlugin);

run();
```
