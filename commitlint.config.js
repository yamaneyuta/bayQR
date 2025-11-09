module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['upper-case']]  // upper-caseのみ禁止、その他は許可
  }
};
