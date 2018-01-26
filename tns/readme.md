# NativeScript+VueJS Sample Application

Modified version of app generated from [nativescript-vue-rollup-template](https://github.com/tralves/nativescript-vue-rollup-template)

### To Run App

In two separate terminals run:
```
# terminal 1
rollup -c -w

# terminal 2
cd tns
tns run android
# or
tns run ios
```

### To Clean App

```
# first...
tns platform remove ios

# then...
cd tns
tns platform remove ios
# or
tns platform remove android
```

### Adding External Modules

At this point it seems like the `node_modules` directory in the `tns` director is where you need to add the packages you want included in the build, not ideal but I personally think the process for building nativescript+vue is still not ready for prime time