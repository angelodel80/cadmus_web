module.exports = {
  name: 'features-feature-item-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/features/feature-item-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
