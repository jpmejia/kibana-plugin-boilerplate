export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      hacks: [
        'plugins/my_plugin/hack'
      ]
    }
  });
}
