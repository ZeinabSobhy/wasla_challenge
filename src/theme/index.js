/**
 * Here's a link for the theme object with the default values provided by MUI.
 * https://material-ui.com/customization/default-theme/#default-theme
 */

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import palette from './palette.theme';
import typography from './typography.theme';
import generic from './generic.theme';
import mixins from './mixins.theme';
// Change the default props of a Material-UI component
import muiDefaultProps from './muiDefaultProps.theme';
// Change every single style injected by Material-UI in an Mui component
import muiStyles from './muiStylesOverrides.theme';

const theme = createMuiTheme({
	shape: {
		borderRadius: 4,
	},
	zIndex: {
		sideScroll: 500,
	},
	palette,
	typography,
	mixins,
	props: muiDefaultProps,
	overrides: {
		...muiStyles,
		MuiCssBaseline: {
			'@global': generic,
		},
	},
});

export default responsiveFontSizes(theme);
