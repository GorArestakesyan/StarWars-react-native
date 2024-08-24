/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { getDefaultConfig } from 'metro-config';
import path from 'path';

export default (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: path.resolve('node_modules/react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
