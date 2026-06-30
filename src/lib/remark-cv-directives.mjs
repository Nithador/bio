function visit(node, visitor) {
  visitor(node);

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => visit(child, visitor));
  }
}

function cvEntryBody(children) {
  return {
    type: "cvEntryBody",
    data: {
      hName: "div",
      hProperties: {
        className: ["cv-entry-body"]
      }
    },
    children
  };
}

export default function remarkCvDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective" || node.name !== "cv-entry") {
        return;
      }

      const attributes = node.attributes ?? {};
      const properties = {
        className: ["cv-entry"]
      };

      if (attributes.date) {
        properties.dataDate = attributes.date;
      }

      if (attributes.icon) {
        properties.dataIcon = attributes.icon;
      }

      node.data = {
        hName: "div",
        hProperties: properties
      };
      node.children = [cvEntryBody(node.children ?? [])];
    });
  };
}
