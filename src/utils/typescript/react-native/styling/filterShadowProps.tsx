
import isEmpty from 'lodash.isempty';
import { extractInObject } from 'src/theme/tools';

export const filterShadowProps = (
  props: any,
  ignoredProps: any,
  OS: string
) => {
  if (OS !== 'web') {
    return { ...ignoredProps, ...props };
  }
  let style = ignoredProps.style ?? {};
  let [shadowProps, remainingProps] = extractInObject(props, [
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
  ]);
  if (!isEmpty(shadowProps)) {
    style = { ...style, ...shadowProps };
  }
  return { ...remainingProps, ...ignoredProps, style };
};
