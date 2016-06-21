export function configure (aurelia) {
    aurelia.use.standardConfiguration();
    //aurelia.use
    //    .defaultBindingLanguage()
    //    .defaultResources()
    //    .history()
    //    .router()
    //    .eventAggregator();

    aurelia.start().then(x => x.setRoot());
}