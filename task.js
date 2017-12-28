'use strict';

exports.defineTags = (dictionary) => {
  dictionary.defineTag('task', {
    onTagged(doclet, tag) {
      const [match, name] = /{(.*)}/.exec(tag.text);
      doclet.kind = 'module';
      doclet.name = name.trim();
    }
  });
};
