/**
 * Default theme mixins provided by MUI
 * https://material-ui.com/customization/default-theme/?expand-path=$.mixins
 */

import palette from './palette.theme';

export default {
	keyframes: {
		borderflash: {
			'@keyframes borderflash': {
				'0%': {
					border: `2px solid ${palette.divider}`,
					boxShadow: '0 2px 4px 0 rgba(227, 228, 232, 0.89)',
				},
				'50%': {
					border: `2px solid #ff422f`,
					boxShadow: '0 2px 4px 0 rgba(227, 228, 232, 0.89)',
				},
				'100%': {
					border: `2px solid ${palette.divider}`,
					boxShadow: '0 2px 4px 0 rgba(227, 228, 232, 0.89)',
				},
			},
		},
	},
};
