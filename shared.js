import React from 'react';
import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = (Dimensions.get('window').width) - 20;
export const SCREEN_HEIGHT = (Dimensions.get('window').height) - 80;
export const IMAGE_HEIGHT_3FOURTHS = (SCREEN_HEIGHT / 4) * 3;
