"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const ImageAsset_1 = __importDefault(require("./ImageAsset"));
const BackgroundAsset_1 = __importDefault(require("./BackgroundAsset"));
const Info_plist_1 = __importDefault(require("./Info.plist"));
const Storyboard_1 = __importDefault(require("./Storyboard"));
const pbxproj_1 = __importDefault(require("./pbxproj"));
async function configureIos(projectRootPath, { resizeMode, backgroundColor, darkModeBackgroundColor, imagePath, darkModeImagePath, statusBarHidden, statusBarStyle, }) {
    const iosProject = await pbxproj_1.default(projectRootPath);
    await Promise.all([
        Info_plist_1.default(iosProject.projectPath, { statusBarHidden, statusBarStyle }),
        ImageAsset_1.default(iosProject.projectPath, imagePath, darkModeImagePath),
        BackgroundAsset_1.default(iosProject.projectPath, backgroundColor, darkModeBackgroundColor),
        Storyboard_1.default(iosProject, {
            resizeMode,
            splashScreenImagePresent: !!imagePath,
        }),
    ]);
    await fs_extra_1.default.writeFile(iosProject.pbxProject.filepath, iosProject.pbxProject.writeSync());
}
exports.default = configureIos;
//# sourceMappingURL=index.js.map