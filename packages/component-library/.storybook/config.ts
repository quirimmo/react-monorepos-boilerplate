import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

configure(require.context('../lib', true, /\.stories\.tsx?$/), module);
