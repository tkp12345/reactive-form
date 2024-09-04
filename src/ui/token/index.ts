import { $scale } from "./vars/scale/color";
import { $semantic } from "./vars/semantic/color";
import { $staticScale } from "./vars/static-scale/color";

export const colorTokens = { ...$scale.color, ...$semantic.color, ...$staticScale.color };
