# RoadOfRN
the Road of RN

#### Moving between screens
* ` this.props.navigation.navigate('RouteName') `将新路由推送到堆栈导航器，如果它尚未在堆栈中，则跳转到该页面。
* 我们可以多次调用` this.props.navigation.push('RouteName') `，并且它会继续推送路由。
* 标题栏会自动显示返回按钮，但你可以通过调用` this.props.navigation.goBack() `以编程方式返回。 在Android上，硬件返回按钮会按预期工作。
* 您可以使用` this.props.navigation.navigate('RouteName') `返回堆栈中的现有页面，你可以使用` this.props.navigation.popToTop() `返回堆栈中的第一个页面。
* ` navigation ` prop适用于所有屏幕组件（组件定义为路由配置中的屏幕，并且被 React Navigation 渲染为路由）。

#### Passing parameters to routes
- navigate接受可选的第二个参数，以便将参数传递给要导航到的路由。 例如：`this.props.navigation.navigate('RouteName', {paramName: 'value'})`
- You can read the params through `this.props.navigation.getParam`
- As an alternative to getParam, you may use `this.props.navigation.state.params`. It is null if no parameters are specified.