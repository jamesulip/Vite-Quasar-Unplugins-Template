import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
}, {
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
})
