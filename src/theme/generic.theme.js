import typefaceLight from '../assets/fonts/DINNextRoundedLTPro-Light.otf';
import typefaceRegular from '../assets/fonts/DINNextRoundedLTPro-Regular.otf';
import typefaceMedium from '../assets/fonts/DINNextRoundedLTPro-Medium.otf';
import typefaceBold from '../assets/fonts/DINNextRoundedLTPro-Bold.otf';

import AlmaraiLight from '../assets/fonts/Almarai-Light.ttf';
import AlmaraiRegular from '../assets/fonts/Almarai-Regular.ttf';
import AlmaraiExtraBold from '../assets/fonts/Almarai-ExtraBold.ttf';
import AlmaraiBold from '../assets/fonts/Almarai-Bold.ttf';

import typography from './typography.theme';

const tfLight = {
	fontFamily: 'DINNextRoundedLTPro',
	src: `url(${typefaceLight}) format('opentype')`,
	fontWeight: 300,
};
const tfRegular = {
	fontFamily: 'DINNextRoundedLTPro',
	src: `url(${typefaceRegular}) format('opentype')`,
	fontWeight: 400,
};
const tfMedium = {
	fontFamily: 'DINNextRoundedLTPro',
	src: `url(${typefaceMedium}) format('opentype')`,
	fontWeight: 500,
};
const tfBold = {
	fontFamily: 'DINNextRoundedLTPro',
	src: `url(${typefaceBold}) format('opentype')`,
	fontWeight: 700,
};

const alLight = {
	fontFamily: 'Almarai',
	src: `url(${AlmaraiLight}) format('truetype')`,
	fontWeight: 300,
};
const alRegular = {
	fontFamily: 'Almarai',
	src: `url(${AlmaraiRegular}) format('truetype')`,
	fontWeight: 400,
};
const alMedium = {
	fontFamily: 'Almarai',
	src: `url(${AlmaraiBold}) format('truetype')`,
	fontWeight: 500,
};
const alBold = {
	fontFamily: 'Almarai',
	src: `url(${AlmaraiExtraBold}) format('truetype')`,
	fontWeight: 700,
};

export default {
	'@font-face': [
		tfLight,
		tfRegular,
		tfMedium,
		tfBold,
		alLight,
		alRegular,
		alMedium,
		alBold,
	],
	body: {
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
		width: 'auto',
		'min-width': '300px',
		'overflow-x': 'hidden',
		'& b': {
			fontWeight: 500,
		},
	},
	html: {},
	'.MuiSnackbarContent-message': {
		'&&': {
			fontFamily: typography.fontFamily,
			fontWeight: '500',
			fontSize: '1rem',
			maxWidth: '40vw',
			wordBreak: 'break-all',
		},
	},
	// 'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active':
	// 	{
	// 		'-webkit-box-shadow': '0 0 0 30px white inset !important;'
	// 	}
};
