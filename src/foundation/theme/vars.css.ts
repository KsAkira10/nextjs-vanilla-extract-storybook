import { createThemeContract } from '@vanilla-extract/css';

import { defaultTheme } from '.';

export const defaultVars = createThemeContract(defaultTheme);
