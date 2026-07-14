module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 120],
  },
  // Historical commit merged before it was linted; cannot be reworded
  // without rewriting published history.
  ignores: [message => message.startsWith('human readable gift wallet fee constants (#18)')],
}
