# Changelog

<a name="3.1.4"></a>

## 3.1.4 (2021-09-09)

### Added

-   👷‍♂️ Add release config for Github Actions [[cfe69bd](https://github.com/AckeeCZ/redux-utils/commit/cfe69bd683ae937b0c1f4203c4c13b5f5b0dea6c)]

### Changed

-   ⬆️ Bump path-parse from 1.0.6 to 1.0.7 [[3a5dbe3](https://github.com/AckeeCZ/redux-utils/commit/3a5dbe3d6452dfab83a6d6564194304a9f093940)]
-   ⬆️ Bump tar from 4.4.13 to 4.4.15 [[523f221](https://github.com/AckeeCZ/redux-utils/commit/523f2218ebd9496c26305985e29e31e7c1ea7e9b)]
-   ⬆️ Bump browserslist from 4.12.0 to 4.16.6 [[db5e724](https://github.com/AckeeCZ/redux-utils/commit/db5e72480e44e273d7b487daf2140aeebdefb215)]
-   ⬆️ Bump ws from 6.2.1 to 6.2.2 [[ab73de5](https://github.com/AckeeCZ/redux-utils/commit/ab73de5fd1c66d33eb565ee9d3425acb1ca96d63)]

<a name="3.1.3"></a>

## 3.1.3 (2021-06-15)

### Changed

-   ♻️ Remove redundant dep., simplify babel config, upgrade babel dep. [[d7319d8](https://github.com/AckeeCZ/redux-utils/commit/d7319d8523c5ab2a42464539b59ade45b870b2a5)]

### Fixed

-   🐛 Fix setting totalCount in paginationApiReducer and infiniteListApiReducer [[9246e81](https://github.com/AckeeCZ/redux-utils/commit/9246e813ee4ef5dc244999019c762b0d49ac0572)]

### Miscellaneous

-   🏷️ Add types export from config [[8531ba3](https://github.com/AckeeCZ/redux-utils/commit/8531ba3be1c64792a84ab040368f1b912a7f3eb9)]

<a name="3.1.2"></a>

## 3.1.2 (2021-05-21)

### Changed

-   ♻️ Update api actions default values [[47af6bd](https://github.com/AckeeCZ/redux-utils/commit/47af6bdb2acff19c99a23f20814f471076185d75)] (Resolves [#51](https://github.com/AckeeCZ/redux-utils/issues/51))

<a name="3.1.1"></a>

## 3.1.1 (2021-05-20)

### Fixed

-   🐛 Fix actions import [[5ea73e0](https://github.com/AckeeCZ/redux-utils/commit/5ea73e06ec35a2140154281fd5f95d67fe65d22d)]

<a name="3.1.0"></a>

## 3.1.0 (2021-05-19)

New action utilities with better Typescript support (uses Redux Toolkit).

### Added

-   ✨ Add create API actions typed utilities [[06cb309](https://github.com/AckeeCZ/redux-utils/commit/06cb309a5eca3ca9c75abb60e237df4a5f8b740a)]
-   ➕ Add redux toolkit [[d7cff43](https://github.com/AckeeCZ/redux-utils/commit/d7cff4361acf6da72fa4401fac13770e00b9009c)

### Security

-   🔒 Add security resolutions for problematic packages [[638c230](https://github.com/AckeeCZ/redux-utils/commit/638c2305949af207e51fca92c050d05c2505cf9b)]

<a name="3.0.1"></a>

## 3.0.1 (2021-05-10)

### Changed

-   🔧 Fetch origin before bumping a new version [[987f246](https://github.com/AckeeCZ/redux-utils/commit/987f246c1118ec591e5bda3420c99f1001eae232)]
-   ⬆️ Bump lodash from 4.17.15 to 4.17.21 [[7650c85](https://github.com/AckeeCZ/redux-utils/commit/7650c85c5c45f96932b1360f316253fb84dfb702)]
-   ⬆️ Bump handlebars from 4.7.6 to 4.7.7 [[766fb65](https://github.com/AckeeCZ/redux-utils/commit/766fb65d14b92547a97bb22f87476826de7c766d)]
-   ⬆️ Bump ssri from 6.0.1 to 6.0.2 [[1977116](https://github.com/AckeeCZ/redux-utils/commit/19771169c422c6f7398101f38475aaa2b45edd7c)]
-   🔧 Generate TS types to &#x27;lib&#x27; output dir instead of &#x27;es&#x27; [[ba91d2e](https://github.com/AckeeCZ/redux-utils/commit/ba91d2eb93828f11b3474fc9a67c43fbe1f41a7b)]
-   ⬆️ Bump y18n from 3.2.1 to 3.2.2 [[d5caeb7](https://github.com/AckeeCZ/redux-utils/commit/d5caeb702411f697cb720559718806695e851e81)]
-   ⬆️ Bump ini from 1.3.5 to 1.3.8 [[59ca556](https://github.com/AckeeCZ/redux-utils/commit/59ca556d41fbe0a84f75e72a943e2da91881786e)]

### Miscellaneous

-   Bump elliptic from 6.5.3 to 6.5.4 [[5c191a8](https://github.com/AckeeCZ/redux-utils/commit/5c191a8d2e9054d853d77f6f2a63e2ef8a3db3af)]

<a name="3.0.0"></a>

## 3.0.0 (2021-03-19)

### Added

-   ✅ updated test file to ts file [[d2ce4f0](https://github.com/AckeeCZ/redux-utils/commit/d2ce4f0d67f7284be12e62d2dc3a3b51d5446e61)]
-   ✨ new scripts for building typescript [[bcd7989](https://github.com/AckeeCZ/redux-utils/commit/bcd7989033a4935d196419e338f2cfb668c280a5)]
-   ✨ add detail request option to actions utils [[e4f499f](https://github.com/AckeeCZ/redux-utils/commit/e4f499fe1c35a1767a4926571cb4793b820d13fd)]
-   ✅ add apiRequestType tests [[e23aa1b](https://github.com/AckeeCZ/redux-utils/commit/e23aa1b9c2faa9b4b5dca138ded624261d14b46b)]
-   ✅ remove forgotten only for a test [[711c124](https://github.com/AckeeCZ/redux-utils/commit/711c124bce773ab390d88e15b87f6a101fb97aa8)]
-   ✨ add factory for generating actions with common params [[20215cd](https://github.com/AckeeCZ/redux-utils/commit/20215cdd43a1a4dc7c69540692ace2fddd0ddd2e)]
-   ✨ add a factory for creating both types and actions [[4df7242](https://github.com/AckeeCZ/redux-utils/commit/4df72429b171ac58948d713ac2bc82e3e71e7cbb)]
-   ✨ add a factory for creating actions from types [[af1102c](https://github.com/AckeeCZ/redux-utils/commit/af1102ca42b71f3f78018987e05b47592fd5def8)]
-   ✅ update tests config and fix tests [[bab85ed](https://github.com/AckeeCZ/redux-utils/commit/bab85ed6e5da0156c1e6ac73626d92e33493bda1)]

### Changed

-   🔧 build script updated, travis npm key added [[bb1550b](https://github.com/AckeeCZ/redux-utils/commit/bb1550bb0b23b08058e16f65dd58a87330542084)]
-   ♻️ improvim global exports [[8919822](https://github.com/AckeeCZ/redux-utils/commit/8919822d1287f4e74f16574206297bd93e5ac192)]
-   🚨 trailing whitespaces jsdoc [[fdef553](https://github.com/AckeeCZ/redux-utils/commit/fdef553865e96e66b19bd4347d635f13d11ddb43)]
-   🎨 ts optional type fixed [[2048a9c](https://github.com/AckeeCZ/redux-utils/commit/2048a9c9cc4f0d93553b324234c18120b666d48b)]
-   🎨 ts types added [[e5b0c4e](https://github.com/AckeeCZ/redux-utils/commit/e5b0c4eebc9fcaa9de5eadc480dd7f69261a7fdb)]
-   🎨 rebase [[712ba3f](https://github.com/AckeeCZ/redux-utils/commit/712ba3f5f5e9bea5a02f9787c487e2d66dc84391)]
-   🔧 package update [[8b2cc9b](https://github.com/AckeeCZ/redux-utils/commit/8b2cc9b36c2ae3e9fa468a4c384fe5182a293d16)]
-   🔧 configs updated, package.json updated [[f12a26c](https://github.com/AckeeCZ/redux-utils/commit/f12a26c33ebf214090b53271bfc1cf859be90f66)]
-   🚨 ts lint arrow functions fixed [[fd886df](https://github.com/AckeeCZ/redux-utils/commit/fd886dfdbc509149e57e907ed6c0d5075b269ee3)]
-   🎨 reducers typecript started [[73a5b3a](https://github.com/AckeeCZ/redux-utils/commit/73a5b3a0fe9c59156dc3b91bd3f3dffc4d6ceff8)]
-   🎨 config updated, new files written [[093f3c3](https://github.com/AckeeCZ/redux-utils/commit/093f3c36dc3d7ad6b3c985d606ffce437dfab959)]
-   🎨 propertykey string type [[f3e2a31](https://github.com/AckeeCZ/redux-utils/commit/f3e2a31064a61a0fe10e3801abb002bbee0c17ff)]
-   🎨 config changed, eslint fixed [[550c9de](https://github.com/AckeeCZ/redux-utils/commit/550c9def6666863c53dfd844730ba3de559672d2)]
-   🎨 strictObj method to typescript, non functional PropertyKey [[05c8aa6](https://github.com/AckeeCZ/redux-utils/commit/05c8aa6665bb519dd2977b003ebee66eaa8e1e35)]
-   🎨 first file rewritten into TS [[87d553e](https://github.com/AckeeCZ/redux-utils/commit/87d553edccbc1422fd4b443d48cbe59b693a16a2)]
-   🎨 ts-nocheck back [[8ec7a7c](https://github.com/AckeeCZ/redux-utils/commit/8ec7a7cd4686075e49f68d62e273e155d0055b9b)]
-   🎨 request type params moved [[f91fc1c](https://github.com/AckeeCZ/redux-utils/commit/f91fc1cdb1f96cdfcd6b9a916d256ba285f9c29c)]
-   🎨 babel preset for typescript added [[5167443](https://github.com/AckeeCZ/redux-utils/commit/5167443145214913e8c2a447662d1f12291a98cb)]
-   🚨 ignore ts linting [[50c1e7f](https://github.com/AckeeCZ/redux-utils/commit/50c1e7f19e68a8fa65550ee26c8819733e9667ac)]
-   🔧 jest config changed [[e67a7f7](https://github.com/AckeeCZ/redux-utils/commit/e67a7f7151f963948d521755d807abc265739f45)]
-   🎨 add ignore all ts errors in files, no-check [[805af99](https://github.com/AckeeCZ/redux-utils/commit/805af991180ab2ea0f8a87c6f5a207ea02926c41)]
-   ♻️ refactor action helpers [[cefa0bd](https://github.com/AckeeCZ/redux-utils/commit/cefa0bd54938bd8c01254ea4df1ce06117c2b422)]
-   ♻️ rename asyncTypes to apiRequestTypes [[aa79129](https://github.com/AckeeCZ/redux-utils/commit/aa7912964987af7ac0ec044c6e0a0caa2528b529)]
-   🚚 rename api request action helpers [[cd38352](https://github.com/AckeeCZ/redux-utils/commit/cd38352e1c600dd0eff5c7977ae5a20b6d5958c5)]
-   🔧 fix babel config [[c9b4a6a](https://github.com/AckeeCZ/redux-utils/commit/c9b4a6a0594661c34ce27554a1982dfb94fa5bd8)]
-   🔧 add test command to pre-push hook [[839a06c](https://github.com/AckeeCZ/redux-utils/commit/839a06c7564a99fa67577ea89deccc5a307f2c45)]

### Fixed

-   💚 travis npm api key changed [[caf3fa2](https://github.com/AckeeCZ/redux-utils/commit/caf3fa205c69c371d4971d4a9938fb9e8eab90c6)]
-   🐛 Fix babel config [[e73ad42](https://github.com/AckeeCZ/redux-utils/commit/e73ad42d2d8564d8b2ccce89d97fe5547fe69b32)]
-   🐛 Exclude tests from npm package [[ea606f0](https://github.com/AckeeCZ/redux-utils/commit/ea606f0cadd3c4b08d513d3740e2830f0f26e349)]
-   🐛 add missing export [[5676aa6](https://github.com/AckeeCZ/redux-utils/commit/5676aa6fe06fb12313e97466b925730f2d4e6f13)]

### Miscellaneous

-   v3.0.0 [[d565411](https://github.com/AckeeCZ/redux-utils/commit/d5654110cc813e561e7218636247af055fc56801)]
-   Delete yarn-error.log [[704e1be](https://github.com/AckeeCZ/redux-utils/commit/704e1be8cc5f763083eb9c8a3d6b62f680ee12e7)]
-   v3.0.3 [[e6c7d0d](https://github.com/AckeeCZ/redux-utils/commit/e6c7d0d6f222e46303d5daeeb3c32389ddb40053)]
-   v3.0.1 [[02ccc43](https://github.com/AckeeCZ/redux-utils/commit/02ccc43fb21f7dde8a37a8fbbe039027204c4461)]
-   Merge pull request [#42](https://github.com/AckeeCZ/redux-utils/issues/42) from AckeeCZ/3.2.0-alpha [[0a554d0](https://github.com/AckeeCZ/redux-utils/commit/0a554d0a5c6afad260dc0aaed3d50204a864ac86)]
-   🔀 rebasing master [[8071c03](https://github.com/AckeeCZ/redux-utils/commit/8071c03b40300c053247f42585f625e91511761b)]
-   Merge pull request [#40](https://github.com/AckeeCZ/redux-utils/issues/40) from AckeeCZ/feat/types-config [[f409cff](https://github.com/AckeeCZ/redux-utils/commit/f409cff30ea0e203c9199b094b96f1d0cdc176f9)]
-   🏷️ custom config basic reducer updated [[ff333cb](https://github.com/AckeeCZ/redux-utils/commit/ff333cbdd54c8f62de65aefa94674e9dee9ab8b9)]
-   🏷️ generic types back to any [[42f3568](https://github.com/AckeeCZ/redux-utils/commit/42f356897d63353ea53ed3d563e50fa828d3d1f2)]
-   🏷️ generic types any updated [[65c7d66](https://github.com/AckeeCZ/redux-utils/commit/65c7d665904afad7d1dbd9c79cdb9cca3f621f53)]
-   Merge pull request [#37](https://github.com/AckeeCZ/redux-utils/issues/37) from AckeeCZ/feat/ts-all-files [[d9dbb80](https://github.com/AckeeCZ/redux-utils/commit/d9dbb80a62cd4add6d92e5592bcc7679928b8ee2)]
-   Merge branch &#x27;3.1.0-alpha&#x27; of https://github.com/AckeeCZ/redux-utils into feat/ts-all-files [[0134b2e](https://github.com/AckeeCZ/redux-utils/commit/0134b2e12725649cfbc299ad293fe00f58b84b51)]
-   Merge pull request [#36](https://github.com/AckeeCZ/redux-utils/issues/36) from AckeeCZ/feat/ts-1 [[15a1643](https://github.com/AckeeCZ/redux-utils/commit/15a164395585f03ddcdc148440dafd10e16b2268)]
-   🏷️ strin types updated [[ede26c2](https://github.com/AckeeCZ/redux-utils/commit/ede26c2fb650a43ca6d5d3950cff4ad42003ab0c)]
-   🏷️ types string updated [[aaff5de](https://github.com/AckeeCZ/redux-utils/commit/aaff5de8c666a31983d9a7d9c65142a323e0afb8)]
-   🏷️ generic types added [[0c91145](https://github.com/AckeeCZ/redux-utils/commit/0c91145660eed137901ba2d019f45ebb2846c051)]
-   🏷️ generic types added [[c113cac](https://github.com/AckeeCZ/redux-utils/commit/c113cac77d82360a85e3cd9493cecfe4d9077061)]
-   💡 jsdoc removed [[e233c86](https://github.com/AckeeCZ/redux-utils/commit/e233c86680a51bf412517c54897e21eb2f8b0503)]
-   Merge branch &#x27;feat/ts-1&#x27; of https://github.com/AckeeCZ/redux-utils into feat/ts-all-files [[e3fbad1](https://github.com/AckeeCZ/redux-utils/commit/e3fbad10c29ecee441b0b877d6ddbb13c69c0218)]
-   Merge branch &#x27;3.1.0-alpha&#x27; of https://github.com/AckeeCZ/redux-utils into feat/ts-1 [[98e30ff](https://github.com/AckeeCZ/redux-utils/commit/98e30ffab9056ac3bd387c531e29aa77b6708467)]
-   Merge pull request [#38](https://github.com/AckeeCZ/redux-utils/issues/38) from AckeeCZ/feat/typescript-init-errors-fix [[50d6623](https://github.com/AckeeCZ/redux-utils/commit/50d6623fb2534f60b0711c22782d589072b9bdab)]
-   Merge branch &#x27;3.1.0-alpha&#x27; of https://github.com/AckeeCZ/redux-utils into feat/typescript-init-errors-fix [[a8de798](https://github.com/AckeeCZ/redux-utils/commit/a8de7984a2a54b111cfe72d4e75d8725289abcde)]
-   Merge pull request [#34](https://github.com/AckeeCZ/redux-utils/issues/34) from AckeeCZ/feat/typescript-init-errors-fix [[43287b2](https://github.com/AckeeCZ/redux-utils/commit/43287b2defd131147ba5fba33a44b3b964bae429)]
-   🏷️ tslint fixed [[13858e7](https://github.com/AckeeCZ/redux-utils/commit/13858e79bbaad6436d6ad15532701e0bb668085e)]
-   🏷️ adding types into all files left [[2cc52ff](https://github.com/AckeeCZ/redux-utils/commit/2cc52ffbc2344cce86379147e8f65711e32b3580)]
-   2.4.3 [[7159943](https://github.com/AckeeCZ/redux-utils/commit/7159943b8568059f22b7f9b79d7001f87ce85786)]
-   📝 Update changelog [[f36d289](https://github.com/AckeeCZ/redux-utils/commit/f36d28970b575f0a29110143d9a7512bbadbbb6e)]
-   2.4.2 [[e194bb7](https://github.com/AckeeCZ/redux-utils/commit/e194bb769401c78955c8276d1f17d82017f4a68b)]
-   Merge pull request [#26](https://github.com/AckeeCZ/redux-utils/issues/26) from AckeeCZ/dependabot/npm_and_yarn/lodash-4.17.19 [[caa76db](https://github.com/AckeeCZ/redux-utils/commit/caa76db99743be2bb0107424313166ba1d832bed)]
-   Merge pull request [#27](https://github.com/AckeeCZ/redux-utils/issues/27) from AckeeCZ/dependabot/npm_and_yarn/elliptic-6.5.3 [[21b7367](https://github.com/AckeeCZ/redux-utils/commit/21b7367d6669b8dfb7e783f4904b11177db52c43)]
-   Bump elliptic from 6.5.2 to 6.5.3 [[e7e980a](https://github.com/AckeeCZ/redux-utils/commit/e7e980a3908877df149552fd5c1ea197c4c72e69)]
-   Bump lodash from 4.17.15 to 4.17.19 [[0f325d4](https://github.com/AckeeCZ/redux-utils/commit/0f325d4163fa487240e96ac3938a01424b177850)]
-   v3.0.0-alpha.0 [[2ec17d1](https://github.com/AckeeCZ/redux-utils/commit/2ec17d1f5155c9293d716cdd78f96f8e7d0c6b94)]
-   Merge pull request [#25](https://github.com/AckeeCZ/redux-utils/issues/25) from AckeeCZ/issue-23 [[59ceb42](https://github.com/AckeeCZ/redux-utils/commit/59ceb4229e883b5123cd41f0409e887a7eb5e57e)]
-   📝 update actions documentation [[b58661b](https://github.com/AckeeCZ/redux-utils/commit/b58661b74849e49c16a799f1eee139ecf9a6143e)]
-   📝 update request documentation [[0637022](https://github.com/AckeeCZ/redux-utils/commit/0637022c15a891ee8360a8b26bac317621554924)]
-   📝 update docs [[682ad5c](https://github.com/AckeeCZ/redux-utils/commit/682ad5c6e62a041866478753875b0292267fd31e)]
-   📝 update docs [[5658c94](https://github.com/AckeeCZ/redux-utils/commit/5658c9438ad43f497b86229d9e4f2a70ad124724)]
-   🗑️ remove apiActionsTypes helper [[dbfbeeb](https://github.com/AckeeCZ/redux-utils/commit/dbfbeeb59d7718418f14d2c3c7518c6d055877d7)]
-   💡 update docs [[974e203](https://github.com/AckeeCZ/redux-utils/commit/974e203b20f3d97761900d2176de05d2c075c15f)]
-   💡 update documentation [[a564a61](https://github.com/AckeeCZ/redux-utils/commit/a564a617d9751b7f257ebf6c9bb39cac24300486)]
-   📝 add documentation for request actions [[01ce1c3](https://github.com/AckeeCZ/redux-utils/commit/01ce1c337cd74f762e8035c0584a849a25178f00)]

<a name="2.4.1"></a>

## 2.4.1 (2020-08-11)

### Changed

-   🚸 Remove index files with re-exports to enable jsdocs [[40f1ebb](https://github.com/AckeeCZ/redux-utils/commit/40f1ebbd4520c33f6590e9684168f5f9b75023fa)]

### Miscellaneous

-   2.4.1 [[e1d18b5](https://github.com/AckeeCZ/redux-utils/commit/e1d18b57284a12ca493b5b419bb8b6f2713b842e)]
-   📝 Update changelog [[9318c47](https://github.com/AckeeCZ/redux-utils/commit/9318c474d6512256f5e1ebb55e1484384fde9747)]
-   Merge pull request [#29](https://github.com/AckeeCZ/redux-utils/issues/29) from AckeeCZ/feature/jsdocs [[6542a9c](https://github.com/AckeeCZ/redux-utils/commit/6542a9cbf4d807ba025cf60c49b3d988655d4cec)]
-   📝 Add jsdocs with params types [[62c62d7](https://github.com/AckeeCZ/redux-utils/commit/62c62d7a54e4ff3277e27af741651c10f3ed590c)]

<a name="2.4.0"></a>

## 2.4.0 (2020-07-01)

### Added

-   ✨ Extend infiniteListApiReducer - add totalCount property support [[34ea064](https://github.com/AckeeCZ/redux-utils/commit/34ea064120fc9d6840094bddb44babad33a335ca)]

### Changed

-   🔧 Update babel config [[f26ca99](https://github.com/AckeeCZ/redux-utils/commit/f26ca99e29bc6ab5f4538e81a1930388d8c428ac)]
-   ⬆️ Upgrade @ackee/browserslist-config [[989f2b1](https://github.com/AckeeCZ/redux-utils/commit/989f2b136999448a45504edee668ec4ec746c2c4)]

### Miscellaneous

-   2.4.0 [[7e70b63](https://github.com/AckeeCZ/redux-utils/commit/7e70b63adeada676bc5aa03d267892a9d69f8edc)]
-   📝 Update changelog [[6c8ebd7](https://github.com/AckeeCZ/redux-utils/commit/6c8ebd7bbf1399ce48da730a8197dd514cc170ba)]

<a name="2.3.3"></a>

## 2.3.3 (2020-06-07)

### Changed

-   🔧 Disable debug option [[a5a40e9](https://github.com/AckeeCZ/redux-utils/commit/a5a40e96af8883bf2a9fb08f1c41ee369b102b90)]

### Miscellaneous

-   2.3.3 [[9cf5ea2](https://github.com/AckeeCZ/redux-utils/commit/9cf5ea2e9e5d0bce6a6fe05393b587b39187a968)]

<a name="2.3.2"></a>

## 2.3.2 (2020-06-07)

### Changed

-   ⬆️ Upgrade dependencies; add @ackee/browserslist-config [[20a25ac](https://github.com/AckeeCZ/redux-utils/commit/20a25ac31b9338177851381fb89ffa3062b0c920)]

### Miscellaneous

-   2.3.2 [[efdde92](https://github.com/AckeeCZ/redux-utils/commit/efdde92f4568748c36e0d717baca7ada117b31d8)]
-   📝 Update changelog [[c480d4a](https://github.com/AckeeCZ/redux-utils/commit/c480d4a947935f4c8332e706024ad87a4c63aa1d)]

<a name="2.3.1"></a>

## 2.3.1 (2020-05-19)

### Miscellaneous

-   2.3.1 [[d215c8d](https://github.com/AckeeCZ/redux-utils/commit/d215c8d3da67094dbff6e7b52b1ff57b16868560)]
-   📝 Update docs [[6e94166](https://github.com/AckeeCZ/redux-utils/commit/6e94166c9248381ed407d96c1ff6a32224ff4165)]

<a name="2.3.0"></a>

## 2.3.0 (2020-05-19)

### Breaking changes

-   💥 Don&#x27;t reset lastSuccessAt at REQUEST [[0424f19](https://github.com/AckeeCZ/redux-utils/commit/0424f1945ac74e57f794e7800c59714b315c712e)]

### Miscellaneous

-   2.3.0 [[9593d46](https://github.com/AckeeCZ/redux-utils/commit/9593d463a35f2b00c82bbd5d1db0835af9c08c26)]

<a name="3.0.0-alpha.0"></a>

## 3.0.0-alpha.0 (2020-04-21)

### Added

-   ✨ add detail request option to actions utils [[e4f499f](https://github.com/AckeeCZ/redux-utils/commit/e4f499fe1c35a1767a4926571cb4793b820d13fd)]
-   ✅ add apiRequestType tests [[e23aa1b](https://github.com/AckeeCZ/redux-utils/commit/e23aa1b9c2faa9b4b5dca138ded624261d14b46b)]
-   ✅ remove forgotten only for a test [[711c124](https://github.com/AckeeCZ/redux-utils/commit/711c124bce773ab390d88e15b87f6a101fb97aa8)]
-   ✨ add factory for generating actions with common params [[20215cd](https://github.com/AckeeCZ/redux-utils/commit/20215cdd43a1a4dc7c69540692ace2fddd0ddd2e)]
-   ✨ add a factory for creating both types and actions [[4df7242](https://github.com/AckeeCZ/redux-utils/commit/4df72429b171ac58948d713ac2bc82e3e71e7cbb)]
-   ✨ add a factory for creating actions from types [[af1102c](https://github.com/AckeeCZ/redux-utils/commit/af1102ca42b71f3f78018987e05b47592fd5def8)]
-   ✅ update tests config and fix tests [[bab85ed](https://github.com/AckeeCZ/redux-utils/commit/bab85ed6e5da0156c1e6ac73626d92e33493bda1)]

### Changed

-   ♻️ refactor action helpers [[cefa0bd](https://github.com/AckeeCZ/redux-utils/commit/cefa0bd54938bd8c01254ea4df1ce06117c2b422)]
-   ♻️ rename asyncTypes to apiRequestTypes [[aa79129](https://github.com/AckeeCZ/redux-utils/commit/aa7912964987af7ac0ec044c6e0a0caa2528b529)]
-   🚚 rename api request action helpers [[cd38352](https://github.com/AckeeCZ/redux-utils/commit/cd38352e1c600dd0eff5c7977ae5a20b6d5958c5)]
-   🔧 fix babel config [[c9b4a6a](https://github.com/AckeeCZ/redux-utils/commit/c9b4a6a0594661c34ce27554a1982dfb94fa5bd8)]
-   🔧 add test command to pre-push hook [[839a06c](https://github.com/AckeeCZ/redux-utils/commit/839a06c7564a99fa67577ea89deccc5a307f2c45)]

### Fixed

-   🐛 add missing export [[5676aa6](https://github.com/AckeeCZ/redux-utils/commit/5676aa6fe06fb12313e97466b925730f2d4e6f13)]

### Miscellaneous

-   v3.0.0-alpha.0 [[2ec17d1](https://github.com/AckeeCZ/redux-utils/commit/2ec17d1f5155c9293d716cdd78f96f8e7d0c6b94)]
-   Merge pull request [#25](https://github.com/AckeeCZ/redux-utils/issues/25) from AckeeCZ/issue-23 [[59ceb42](https://github.com/AckeeCZ/redux-utils/commit/59ceb4229e883b5123cd41f0409e887a7eb5e57e)]
-   📝 update actions documentation [[b58661b](https://github.com/AckeeCZ/redux-utils/commit/b58661b74849e49c16a799f1eee139ecf9a6143e)]
-   📝 update request documentation [[0637022](https://github.com/AckeeCZ/redux-utils/commit/0637022c15a891ee8360a8b26bac317621554924)]
-   📝 update docs [[682ad5c](https://github.com/AckeeCZ/redux-utils/commit/682ad5c6e62a041866478753875b0292267fd31e)]
-   📝 update docs [[5658c94](https://github.com/AckeeCZ/redux-utils/commit/5658c9438ad43f497b86229d9e4f2a70ad124724)]
-   🗑️ remove apiActionsTypes helper [[dbfbeeb](https://github.com/AckeeCZ/redux-utils/commit/dbfbeeb59d7718418f14d2c3c7518c6d055877d7)]
-   💡 update docs [[974e203](https://github.com/AckeeCZ/redux-utils/commit/974e203b20f3d97761900d2176de05d2c075c15f)]
-   💡 update documentation [[a564a61](https://github.com/AckeeCZ/redux-utils/commit/a564a617d9751b7f257ebf6c9bb39cac24300486)]
-   📝 add documentation for request actions [[01ce1c3](https://github.com/AckeeCZ/redux-utils/commit/01ce1c337cd74f762e8035c0584a849a25178f00)]

<a name="2.4.1"></a>

## 2.4.1 (2020-08-11)

### Changed

-   🚸 Remove index files with re-exports to enable jsdocs [[40f1ebb](https://github.com/AckeeCZ/redux-utils/commit/40f1ebbd4520c33f6590e9684168f5f9b75023fa)]

### Miscellaneous

-   2.4.1 [[e1d18b5](https://github.com/AckeeCZ/redux-utils/commit/e1d18b57284a12ca493b5b419bb8b6f2713b842e)]
-   📝 Update changelog [[9318c47](https://github.com/AckeeCZ/redux-utils/commit/9318c474d6512256f5e1ebb55e1484384fde9747)]
-   Merge pull request [#29](https://github.com/AckeeCZ/redux-utils/issues/29) from AckeeCZ/feature/jsdocs [[6542a9c](https://github.com/AckeeCZ/redux-utils/commit/6542a9cbf4d807ba025cf60c49b3d988655d4cec)]
-   📝 Add jsdocs with params types [[62c62d7](https://github.com/AckeeCZ/redux-utils/commit/62c62d7a54e4ff3277e27af741651c10f3ed590c)]

<a name="2.4.0"></a>

## 2.4.0 (2020-07-01)

### Added

-   ✨ Extend infiniteListApiReducer - add totalCount property support [[34ea064](https://github.com/AckeeCZ/redux-utils/commit/34ea064120fc9d6840094bddb44babad33a335ca)]

### Changed

-   🔧 Update babel config [[f26ca99](https://github.com/AckeeCZ/redux-utils/commit/f26ca99e29bc6ab5f4538e81a1930388d8c428ac)]
-   ⬆️ Upgrade @ackee/browserslist-config [[989f2b1](https://github.com/AckeeCZ/redux-utils/commit/989f2b136999448a45504edee668ec4ec746c2c4)]

### Miscellaneous

-   2.4.0 [[7e70b63](https://github.com/AckeeCZ/redux-utils/commit/7e70b63adeada676bc5aa03d267892a9d69f8edc)]
-   📝 Update changelog [[6c8ebd7](https://github.com/AckeeCZ/redux-utils/commit/6c8ebd7bbf1399ce48da730a8197dd514cc170ba)]

<a name="2.3.3"></a>

## 2.3.3 (2020-06-07)

### Changed

-   🔧 Disable debug option [[a5a40e9](https://github.com/AckeeCZ/redux-utils/commit/a5a40e96af8883bf2a9fb08f1c41ee369b102b90)]

### Miscellaneous

-   2.3.3 [[9cf5ea2](https://github.com/AckeeCZ/redux-utils/commit/9cf5ea2e9e5d0bce6a6fe05393b587b39187a968)]

<a name="2.3.2"></a>

## 2.3.2 (2020-06-07)

### Changed

-   ⬆️ Upgrade dependencies; add @ackee/browserslist-config [[20a25ac](https://github.com/AckeeCZ/redux-utils/commit/20a25ac31b9338177851381fb89ffa3062b0c920)]

### Miscellaneous

-   2.3.2 [[efdde92](https://github.com/AckeeCZ/redux-utils/commit/efdde92f4568748c36e0d717baca7ada117b31d8)]
-   📝 Update changelog [[c480d4a](https://github.com/AckeeCZ/redux-utils/commit/c480d4a947935f4c8332e706024ad87a4c63aa1d)]

<a name="2.3.1"></a>

## 2.3.1 (2020-05-19)

### Miscellaneous

-   2.3.1 [[d215c8d](https://github.com/AckeeCZ/redux-utils/commit/d215c8d3da67094dbff6e7b52b1ff57b16868560)]
-   📝 Update docs [[6e94166](https://github.com/AckeeCZ/redux-utils/commit/6e94166c9248381ed407d96c1ff6a32224ff4165)]

<a name="2.3.0"></a>

## 2.3.0 (2020-05-19)

### Breaking changes

-   💥 Don&#x27;t reset lastSuccessAt at REQUEST [[0424f19](https://github.com/AckeeCZ/redux-utils/commit/0424f1945ac74e57f794e7800c59714b315c712e)]

### Miscellaneous

-   2.3.0 [[9593d46](https://github.com/AckeeCZ/redux-utils/commit/9593d463a35f2b00c82bbd5d1db0835af9c08c26)]

<a name="2.2.2"></a>

## 2.2.2 (2020-03-18)

### Miscellaneous

-   2.2.2 [[58dc98a](https://github.com/AckeeCZ/redux-utils/commit/58dc98ad8cadd95f4046e86afc933457fe6e4941)]
-   Merge pull request [#22](https://github.com/AckeeCZ/redux-utils/issues/22) from AckeeCZ/bugfix/api-reducer-initial-values [[f981229](https://github.com/AckeeCZ/redux-utils/commit/f981229117b8bad05ceff8817ed1c46c642a9ea8)]
-   Correct actionFilters default values [[c617c1a](https://github.com/AckeeCZ/redux-utils/commit/c617c1acb0821558df9d61cb006395429fe2c1bf)]

<a name="2.2.1"></a>

## 2.2.1 (2019-11-20)

### Miscellaneous

-   2.2.1 [[076d472](https://github.com/AckeeCZ/redux-utils/commit/076d4728d5df21aff8de5cd6b77aa3ffa073778d)]
-   Let custom basicAPiReudcer initial state to progagate to other api reducers [[12c9d27](https://github.com/AckeeCZ/redux-utils/commit/12c9d27c91ec828d5c9829a58ddae7d04486a889)]

<a name="2.2.0"></a>

## 2.2.0 (2019-11-20)

### Miscellaneous

-   2.2.0 [[dc7cbbe](https://github.com/AckeeCZ/redux-utils/commit/dc7cbbeee7fc38f49b523241bf6152e4c6bf1fa6)]
-   Update changelog [[b35d046](https://github.com/AckeeCZ/redux-utils/commit/b35d046ea0c48720fac437d8128fd2fc95e022dc)]
-   Merge pull request [#18](https://github.com/AckeeCZ/redux-utils/issues/18) from AckeeCZ/feature/infiniteListApiReducer [[06b8f89](https://github.com/AckeeCZ/redux-utils/commit/06b8f89ca29fa9d9ef628f39f67d9c216497a4c3)]
-   Add docs for infiniteListApiReducer [[628a1d8](https://github.com/AckeeCZ/redux-utils/commit/628a1d8b773ab4e58a2867fc9477d8b0c1528666)]
-   Add infiniteListApiReducer [[1dd11f6](https://github.com/AckeeCZ/redux-utils/commit/1dd11f6005e465dd1efe8f75cc73a84df7a5b701)]

<a name="2.1.1"></a>

## 2.1.1 (2019-11-15)

### Miscellaneous

-   2.1.1 [[b850f13](https://github.com/AckeeCZ/redux-utils/commit/b850f1331d7c0e7fc76c1753d0b61f3e747054a3)]
-   Update babel config - add @babel/preset-modules [[11efc60](https://github.com/AckeeCZ/redux-utils/commit/11efc6015522dc76ffda3513a3a753810de20999)]

<a name="2.1.0"></a>

## 2.1.0 (2019-11-11)

### Miscellaneous

-   2.1.0 [[c6dd431](https://github.com/AckeeCZ/redux-utils/commit/c6dd431b14f000393bee7fb473ebcacc65be09a6)]
-   Make basicApiReducer, paginationApiReducer and containerReducer globally configurable [[4c49585](https://github.com/AckeeCZ/redux-utils/commit/4c49585aa5902078450bad0e28866821c248a96e)]

<a name="2.0.0"></a>

## 2.0.0 (2019-09-02)

### Miscellaneous

-   2.0.0 [[4ece05f](https://github.com/AckeeCZ/redux-utils/commit/4ece05ffa106129cbd986a03ce2f27b7ba08c163)]
-   hasMore: use limit instead of amount attribute [[448484d](https://github.com/AckeeCZ/redux-utils/commit/448484d3b23fe42f7b474af4250a538c580c8c89)]
-   Upgrade readme link title [[67a3ccf](https://github.com/AckeeCZ/redux-utils/commit/67a3ccf5c1d125f3eeb27bf1662db25e61f2be45)]

<a name="2.0.0-beta.3"></a>

## 2.0.0-beta.3 (2019-07-09)

### Miscellaneous

-   2.0.0-beta.3 [[2c65f96](https://github.com/AckeeCZ/redux-utils/commit/2c65f966d63df89bb51451cca0178dfb5213a141)]
-   Merge pull request [#10](https://github.com/AckeeCZ/redux-utils/issues/10) from AckeeCZ/feature/last-success-timestamp [[84bde5b](https://github.com/AckeeCZ/redux-utils/commit/84bde5b9db77d0d15195c7fcf57e3504f190d4c0)]
-   basicApiReducer, paginationApiReducer: add support for lastSuccessAt flag [[70306a5](https://github.com/AckeeCZ/redux-utils/commit/70306a5773bf91e896461bfc1240907aa0ac49c7)]
-   Update docs [[39ca5a9](https://github.com/AckeeCZ/redux-utils/commit/39ca5a9f00d1f194f8abb0cf6e54094fc0d6851f)]
-   Update changelog [[ff1a12c](https://github.com/AckeeCZ/redux-utils/commit/ff1a12c058c9f77d324f1fbfa4992089e6b9b618)]

<a name="2.0.0-beta.2"></a>

## 2.0.0-beta.2 (2019-06-27)

### Miscellaneous

-   2.0.0-beta.2 [[778dbbb](https://github.com/AckeeCZ/redux-utils/commit/778dbbb850f42cd99852f4eacf4c4280b565564b)]
-   Merge pull request [#9](https://github.com/AckeeCZ/redux-utils/issues/9) from AckeeCZ/feature/pagination-api-reducer [[2d0cb56](https://github.com/AckeeCZ/redux-utils/commit/2d0cb56f721fb65d2bc586c7c9b55e426d7d258f)]
-   reducers/api/pagination: if SUCCESS action has meta.hasMore, this flag has priority over currentCount &gt;&#x3D; totalCount [[1ca627d](https://github.com/AckeeCZ/redux-utils/commit/1ca627da776a1dbbaba6804340a6f9b132ab7279)]
-   Update README.md [[2c7c83b](https://github.com/AckeeCZ/redux-utils/commit/2c7c83bcf5443a0d30fd9be8dc2450df9af43621)]

<a name="2.0.0-beta.1"></a>

## 2.0.0-beta.1 (2019-06-24)

### Miscellaneous

-   2.0.0-beta.1 [[67835e3](https://github.com/AckeeCZ/redux-utils/commit/67835e3b605574e0edb192805523ff3d98a3c048)]
-   Update changelog [[8b6db59](https://github.com/AckeeCZ/redux-utils/commit/8b6db593205def60fe3aa697fea59b0af4232663)]
-   Upgrade dependencies [[563a39c](https://github.com/AckeeCZ/redux-utils/commit/563a39cda9bbb974948255110b91643a0608f7b7)]

<a name="2.0.0-beta.0"></a>

## 2.0.0-beta.0 (2019-05-28)

### Miscellaneous

-   2.0.0-beta.0 [[2b5ea1c](https://github.com/AckeeCZ/redux-utils/commit/2b5ea1ce02a75c7f2765bb2300a53972a04b2973)]
-   Update strictObjectAccess doc [[855f32e](https://github.com/AckeeCZ/redux-utils/commit/855f32e6f4d91e7e3ae6ce839ba2af7fe3e2bf7e)]
-   Fix links in docs [[721378c](https://github.com/AckeeCZ/redux-utils/commit/721378c5bb26d753c7d68aa0bf1d02dd413fad79)]
-   Update README [[ed440f2](https://github.com/AckeeCZ/redux-utils/commit/ed440f22ed579879c923859a6ce38ed7f95aaf02)]
-   Update README [[6ea4119](https://github.com/AckeeCZ/redux-utils/commit/6ea411907773d8b18a5dbe14041f97bfbe49949c)]
-   Remove yarn test from pre-push hook [[71329ee](https://github.com/AckeeCZ/redux-utils/commit/71329ee09f735998060ffa8c6d55f056d880902b)]
-   Update docs [[2896811](https://github.com/AckeeCZ/redux-utils/commit/2896811885d20c683db432a6a000b171c3a855ca)]
-   Update package.json [[254983b](https://github.com/AckeeCZ/redux-utils/commit/254983bf1547bd5355fc3a166c500becbfe21cbe)]

<a name="2.0.0-alpha.2"></a>

## 2.0.0-alpha.2 (2019-05-04)

### Miscellaneous

-   2.0.0-alpha.2 [[8b7290e](https://github.com/AckeeCZ/redux-utils/commit/8b7290ed87f3e98c71d39da170945f7030ae6d1f)]
-   pagination/config: fix import [[bd0dda3](https://github.com/AckeeCZ/redux-utils/commit/bd0dda38356dcaa986a04c9a2c28d81087a9cd17)]

<a name="2.0.0-alpha.1"></a>

## 2.0.0-alpha.1 (2019-05-04)

### Miscellaneous

-   2.0.0-alpha.1 [[c0b464f](https://github.com/AckeeCZ/redux-utils/commit/c0b464fb6375bf1f96ac672ba885d4751e6d1c90)]
-   Add aliases to jest config [[c7888e0](https://github.com/AckeeCZ/redux-utils/commit/c7888e06d1ea9102a2aac48ff417ab1916968074)]
-   Change reducer properies: isFetching -&gt; inProgress, didInvalidate -&gt; cancelled [[84eb53c](https://github.com/AckeeCZ/redux-utils/commit/84eb53caa8deae5ed29deb13020cd8549d4fc522)]
-   Add @babel/runtime [[a0d766c](https://github.com/AckeeCZ/redux-utils/commit/a0d766c7e9ff59c835cecebd5931650939946abc)]
-   Add aliases [[354f356](https://github.com/AckeeCZ/redux-utils/commit/354f35609a29e8599981b46a49ff10ff5fff4783)]

<a name="2.0.0-alpha.0"></a>

## 2.0.0-alpha.0 (2019-05-04)

### Miscellaneous

-   2.0.0-alpha.0 [[28a1b33](https://github.com/AckeeCZ/redux-utils/commit/28a1b330aec2ada1d42f5b3944e46a23c38f1771)]
-   Update package description [[a68dca8](https://github.com/AckeeCZ/redux-utils/commit/a68dca867c96e64ace885b290bc666261dbd730d)]
-   Add sideEffects flag [[fada4a4](https://github.com/AckeeCZ/redux-utils/commit/fada4a41ad1747b8981df4790530370811c33e33)]
-   Remove createType in favor of asyncType utility [[fa11f13](https://github.com/AckeeCZ/redux-utils/commit/fa11f13c3f85966e2f614c96db5fac1f930874bf)]
-   Remove nested namespace for public exports [[2c7bff8](https://github.com/AckeeCZ/redux-utils/commit/2c7bff82709330ca898ca27996b8cf0b165da544)]

<a name="1.0.0-beta.6"></a>

## 1.0.0-beta.6 (2019-04-27)

### Miscellaneous

-   1.0.0-beta.6 [[26387cc](https://github.com/AckeeCZ/redux-utils/commit/26387cc082af2a87c23969e220fd7c4376796e4c)]
-   Add missing export [[74b6c5b](https://github.com/AckeeCZ/redux-utils/commit/74b6c5b05d769a02bb20379bdf47251da1ff357f)]

<a name="1.0.0-beta.5"></a>

## 1.0.0-beta.5 (2019-04-27)

### Miscellaneous

-   1.0.0-beta.5 [[75ea9d9](https://github.com/AckeeCZ/redux-utils/commit/75ea9d9953b188dd212473a945a037860ac7b8ea)]
-   Merge pull request [#6](https://github.com/AckeeCZ/redux-utils/issues/6) from AckeeCZ/feature/strictObjectAccess [[3457160](https://github.com/AckeeCZ/redux-utils/commit/3457160999385561ad69adb6a838ad20ed53898f)]
-   Add strictObjectAccess utility [[d552cd9](https://github.com/AckeeCZ/redux-utils/commit/d552cd90ea1a21fbdb10651f95755f5b557fb009)]
-   Add jest (for babel) configuration [[cd51835](https://github.com/AckeeCZ/redux-utils/commit/cd518351609c8d49731b9b35fb1b7f423c730f06)]

<a name="1.0.0-beta.4"></a>

## 1.0.0-beta.4 (2019-04-20)

### Miscellaneous

-   1.0.0-beta.4 [[72ecdbc](https://github.com/AckeeCZ/redux-utils/commit/72ecdbc3e9eb89cc2e4bdb710b0375ee9f054486)]
-   Add createAsyncType utitility [[a8edf8e](https://github.com/AckeeCZ/redux-utils/commit/a8edf8e4e6befae6c997b9317b759886e8d88096)]

<a name="1.0.0-beta.3"></a>

## 1.0.0-beta.3 (2019-03-20)

### Miscellaneous

-   1.0.0-beta.3 [[38f7e8a](https://github.com/AckeeCZ/redux-utils/commit/38f7e8a425235da4ad900e6218dd2a3f226ec992)]
-   Update asyncType util. - add RESET action type [[51f39de](https://github.com/AckeeCZ/redux-utils/commit/51f39de43866661145980f75d6137e96b9929a19)]

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2 (2019-03-06)

### Miscellaneous

-   1.0.0-beta.2 [[776c46b](https://github.com/AckeeCZ/redux-utils/commit/776c46b32b88db7998dade8bec138e734f9e1fac)]
-   Merge pull request [#4](https://github.com/AckeeCZ/redux-utils/issues/4) from AckeeCZ/bugfix/pagination-reducer-page [[6fc4156](https://github.com/AckeeCZ/redux-utils/commit/6fc41564b28cd5fdec4a740f589fe7b02a9463e4)]
-   Don&#x27;t increase page on SUCCESS, this must be handled externally [[d34dcc2](https://github.com/AckeeCZ/redux-utils/commit/d34dcc2813efa1b0fe06bcaa10e3a7e5ced646e5)]

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1 (2019-02-25)

### Miscellaneous

-   1.0.0-beta.1 [[5c8b39d](https://github.com/AckeeCZ/redux-utils/commit/5c8b39da2f334d69272d71e30b7560fb13c5f963)]
-   Fix type in doc [[ec87b18](https://github.com/AckeeCZ/redux-utils/commit/ec87b184f91eb99f7af1897e2524e5a5000a0c51)]
-   Merge pull request [#2](https://github.com/AckeeCZ/redux-utils/issues/2) from AckeeCZ/feature/pagination [[faee8c8](https://github.com/AckeeCZ/redux-utils/commit/faee8c8d145530a6dbe21bb852b718931918286f)]
-   Update docs for api reducers [[dddf53d](https://github.com/AckeeCZ/redux-utils/commit/dddf53d1e95e3b85f199489ea7347ef3af5896a1)]
-   api reducers: add UPDATE action type with its action filter to arbitrarily modify reducer&#x27;s state [[f3dd3c1](https://github.com/AckeeCZ/redux-utils/commit/f3dd3c16554e25e2fa82783d93af7bd3271b713a)]
-   pagination factory reducer: add setPage action filter with SET_PAGE action type param [[428a328](https://github.com/AckeeCZ/redux-utils/commit/428a328dbb4c3a1c89f368d34e6937383bb657a2)]

<a name="1.0.0-beta.0"></a>

## 1.0.0-beta.0 (2019-02-04)

### Miscellaneous

-   1.0.0-beta.0 [[13b0fca](https://github.com/AckeeCZ/redux-utils/commit/13b0fcadb4b6c87f19e36f728c43f3f357eaa94f)]
-   Merge pull request [#1](https://github.com/AckeeCZ/redux-utils/issues/1) from AckeeCZ/feature/pagination [[227eb97](https://github.com/AckeeCZ/redux-utils/commit/227eb97def1de5e800c6393014013c1fc7037b41)]
-   Improve error messages for apiSelector [[2b0dd9c](https://github.com/AckeeCZ/redux-utils/commit/2b0dd9c962ac2661ae923df0925d167c487087ab)]
-   Update README, move selectors under &#x27;selectors&#x27; namespace [[acd0cae](https://github.com/AckeeCZ/redux-utils/commit/acd0cae27ea07dc0d99c88153162a9a40a659a71)]
-   Fix syntax error in readme [[e95d850](https://github.com/AckeeCZ/redux-utils/commit/e95d850ce4930d6502ac6c29ababeb65ab9daf29)]
-   Add reselect to dev dependencies [[d5c6756](https://github.com/AckeeCZ/redux-utils/commit/d5c67567f7268a5ee774fd85854a8b12200d2681)]
-   Set logger global variable equal to console object [[a2e098a](https://github.com/AckeeCZ/redux-utils/commit/a2e098a51460c46af0eb426358067febd309d61d)]
-   Enable loggin in development mode by default [[ed02291](https://github.com/AckeeCZ/redux-utils/commit/ed022910a95d30416b72d298bbde6f8bce84a405)]
-   Add apiSelector, apiPaginationSelector [[f1f8bb8](https://github.com/AckeeCZ/redux-utils/commit/f1f8bb8f520b6adacc9209a101a04b4b4f46cfeb)]
-   Remove unused constants [[7a43bab](https://github.com/AckeeCZ/redux-utils/commit/7a43babad4df999176a72284a37bf92935070124)]
-   Add INVALIDATE type as default action type to asyncType utility [[81437af](https://github.com/AckeeCZ/redux-utils/commit/81437afadf2f6e23b2b0ae2fa675b2b36884c004)]
-   Add docs to reducers [[36ec3b9](https://github.com/AckeeCZ/redux-utils/commit/36ec3b971956e129ea9a0f77c0b4b44a2562b470)]
-   Add asyncType - another action types creator [[d4902c6](https://github.com/AckeeCZ/redux-utils/commit/d4902c63f835af2faefcccf8650e0a50205428b7)]
-   Apply prettier onto src dir [[d193cc4](https://github.com/AckeeCZ/redux-utils/commit/d193cc4e795b33ddc99ddc9808e302505df25e7c)]

<a name="0.0.1-alpha.0"></a>

## 0.0.1-alpha.0 (2019-01-28)

### Miscellaneous

-   0.0.1-alpha.0 [[ed8fdbb](https://github.com/AckeeCZ/redux-utils/commit/ed8fdbba4236dc36677fde0b993b0790302289c5)]
-   Add createType [[c54f6bf](https://github.com/AckeeCZ/redux-utils/commit/c54f6bf7d20ba87b8a256237cbab07dfaa3571ab)]
-   Add devDependencies [[8c237af](https://github.com/AckeeCZ/redux-utils/commit/8c237afdc32c86c635ff988a6340aa22259bb400)]
-   Add README.md for redurers (incomplete) [[3709210](https://github.com/AckeeCZ/redux-utils/commit/3709210c539ab183b078b0e5c7874efc63017277)]
-   Add reset reducers [[4021a9d](https://github.com/AckeeCZ/redux-utils/commit/4021a9d2aae4569f34b6466cf07fbee28dc886a2)]
-   Add API reducers and container reducer [[7f94347](https://github.com/AckeeCZ/redux-utils/commit/7f943472cddebd762337c74d248431a374a5e855)]
-   Initial commit [[704a583](https://github.com/AckeeCZ/redux-utils/commit/704a583b1e2f415af010ab621e75cd4e828e4fc8)]
