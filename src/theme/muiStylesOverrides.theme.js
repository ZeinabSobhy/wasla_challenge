/**
 * From here, you can change every single style injected by Material-UI in an Mui component
 * https://material-ui.com/customization/globals/#css
 */
import palette from './palette.theme';
import typography from './typography.theme';

export default {
	// Style sheet name ⚛️
	MuiButton: {
		// Name of the rule
		label: {
			// Some CSS
			lineHeight: 2,
			marginTop: 3,
			textTransform: 'none',
			'& .MuiButton-startIcon, & .MuiButton-endIcon': {
				marginTop: -4,
			},
		},
		contained: {
			boxShadow: 'none',
		},
		outlined: {
			paddingTop: 3,
			paddingBottom: 3,
		},
		root: {
			textTransform: 'none',
			paddingTop: 4,
			paddingBottom: 4,
		},
		containedPrimary: {
			'&:hover': {
				backgroundColor: palette.primary.main,
			},
		},
		containedSecondary: {
			'&:hover': {
				backgroundColor: palette.secondary.main,
			},
		},
		containedSizeLarge: {
			padding: '8px 34px',
			'& .MuiButton-label': {
				fontSize: '1.125rem',
			},
		},
	},
	MuiFormControlLabel: {
		root: {
			marginBottom: '2rem',
		},
		label: {
			color: palette.text.secondary,
		},
	},
	MuiContainer: {
		root: {
			'padding-right': 0,
			'padding-left': 0,
			'@media (min-width: 600px)': {
				'padding-right': 0,
				'padding-left': 0,
			},
		},
	},
	MuiToolbar: {
		root: {
			backgroundColor: '#fff',
			borderBottom: 'solid 1px #e2e2e2',
			alignItems: 'normal',
		},
		gutters: {
			paddingRight: 0,
			'@media (min-width: 600px)': {
				paddingRight: 0,
			},
		},
	},
	MuiAppBar: {
		colorPrimary: {
			color: '#2b2b2b',
			fontWeight: 500,
			fontSize: 18,
		},
	},
	MuiPaper: {
		root: {
			fontFamily: typography.fontFamily,
		},
		elevation4: {
			boxShadow: 'none',
		},
	},
	backdrop: {
		zIndex: 2000,
		color: '#fff',
	},
};
