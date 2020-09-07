import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './selection.json';

const expoAssetId = require('./veriza.ttf');

const VerizaIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'Veriza',
  expoAssetId
);

export default VerizaIcon;
