var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.example;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '4CBD14EF753B4FA99DBC47906E8A89D2';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'interface ', $intern_2 = 'class ', $intern_3 = 'java.lang', $intern_4 = 'com.google.gwt.core.client', $intern_5 = 'com.github.nmorel.gwtjackson.client', $intern_6 = 'com.github.nmorel.gwtjackson.client.deser', $intern_7 = 'com.github.nmorel.gwtjackson.client.deser.bean', $intern_8 = {8:1}, $intern_9 = {3:1, 6:1}, $intern_10 = {3:1, 5:1, 6:1}, $intern_11 = 'com.github.nmorel.gwtjackson.client.exception', $intern_12 = {20:1, 3:1, 5:1, 6:1}, $intern_13 = 'com.github.nmorel.gwtjackson.client.ser', $intern_14 = {3:1}, $intern_15 = 'com.github.nmorel.gwtjackson.client.ser.bean', $intern_16 = {4:1, 7:1}, $intern_17 = 'Nesting problem.', $intern_18 = 'JsonWriter is closed.', $intern_19 = 'null', $intern_20 = 'Numeric values must be finite, but was ', $intern_21 = 'com.github.nmorel.gwtjackson.client.stream.impl', $intern_22 = '-9223372036854775808', $intern_23 = ' at line ', $intern_24 = ' column ', $intern_25 = 'Expected name', $intern_26 = 65535, $intern_27 = 'Expected an int but was ', $intern_28 = 'Expected a long but was ', $intern_29 = 'Unterminated string', $intern_30 = 524288, $intern_31 = 'Unterminated escape sequence', $intern_32 = 'com.google.gwt.core.client.impl', $intern_33 = 'fromIndex: ', $intern_34 = 'com.google.gwt.json.client', $intern_35 = 4194303, $intern_36 = 1048575, $intern_37 = 4194304, $intern_38 = 17592186044416, $intern_39 = -9223372036854775808, $intern_40 = 'localStorage', $intern_41 = 'CSS1Compat', $intern_42 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (', $intern_43 = 'Expect more errors.', $intern_44 = 'it.appify.api', $intern_45 = 'accuracy', $intern_46 = 'altitudeAccuracy', $intern_47 = 'latitude', $intern_48 = 'longitude', $intern_49 = 'GeoOptions', $intern_50 = 'Geoposition', $intern_51 = 'timestamp', $intern_52 = 'coords', $intern_53 = 'availHeight', $intern_54 = 'availWidth', $intern_55 = 'colorDepth', $intern_56 = 'fullscreen', $intern_57 = 'childPage', $intern_58 = 'mainPage', $intern_59 = 'it.appify.app', $intern_60 = 'it.appify.battery', $intern_61 = 'it.appify.examples.client.app', $intern_62 = 'it.appify.view', $intern_63 = {69:1}, $intern_64 = 'it.appify.storage', $intern_65 = 'it.appify.examples.client.controller', $intern_66 = 'it.appify.examples.client.model', $intern_67 = 'title', $intern_68 = 'content', $intern_69 = 'chilePageTitle', $intern_70 = 'childPageContent', $intern_71 = 'batteryStatus', $intern_72 = 'screenOrientation', $intern_73 = 'it.appify.examples.client.service', $intern_74 = 'it.appify.geolocation', $intern_75 = 'it.appify.screenorientation', $intern_76 = 'For input string: "', $intern_77 = 1073741824, $intern_78 = 'java.util', $intern_79 = {14:1}, $intern_80 = {3:1, 19:1}, $intern_81 = '__proto__', $intern_82 = 'com.google.gwt.lang';
var _, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId = {}, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(entry){
  return entry instanceof Array?entry[0]:null;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  var createSubclassPrototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var maybeGetClassLiteralFromPlaceHolder = com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var prototype = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype);
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.java_lang_Object_castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz$ = clazz);
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(superTypeId){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  return com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(prototypesByTypeId[superTypeId]);
}

function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z$(other):com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:this$static === other;
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I$():com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2$ = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz$;
}
;
_.hashCode__I$ = function java_lang_Object_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2$();
}
;
com_google_gwt_lang_Cast_stringCastMap = {3:1, 287:1, 43:1, 2:1};
com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V();
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !!com_google_gwt_lang_Cast_stringCastMap[dstId] || src_0.java_lang_Object_castableTypeMap$ && !!src_0.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  if (src_0 != null && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0))) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0);
}

function com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

var com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  clazz.java_lang_Class_modifiers = 2;
  return clazz;
}

function java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(className, primitiveTypeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('', className);
  clazz.java_lang_Class_typeId = primitiveTypeId;
  clazz.java_lang_Class_modifiers = 1;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  var prototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId];
  return prototype;
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz$ = clazz;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(71, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?$intern_1:(this.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Object', 1), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'JavaScriptObject$', 0), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Class', 71);
function com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static, in_$, ctx){
  var e, name_0, reader, result;
  reader = com_github_nmorel_gwtjackson_client_JsonDeserializationContext_$newJsonReader__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2(in_$);
  try {
    if (ctx.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_unwrapRootValue) {
      if ((com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT) != com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
        throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V('Unwrap root value is enabled but the input is not a JSON Object');
      }
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$beginObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
      if (com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
        throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V('Unwrap root value is enabled but the JSON Object is empty');
      }
      name_0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextName__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader);
      if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_rootName)) {
        throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V("Unwrap root value is enabled but the name '" + name_0 + "' don't match the expected rootName " + "'" + this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_rootName + "'");
      }
      result = com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer = new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_AppModelBeanJsonDeserializerImpl__V) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer), reader, ctx, (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT));
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
      return result;
    }
     else {
      return com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer = new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_AppModelBeanJsonDeserializerImpl__V) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer), reader, ctx, (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT));
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 20)) {
      e = $e0;
      throw e;
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
      e = $e0;
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(ctx.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_wrapExceptions?new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_Throwable_2V(e):e);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static, value_0, ctx){
  var e, writer, com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0;
  writer = (com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0 = new com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_FastJsonWriter__Ljava_lang_StringBuilder_2V(new java_lang_StringBuilder_StringBuilder__V) , com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient = true , ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_indent && (com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_indent = '  ' , com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_separator = ': ') , com_github_nmorel_gwtjackson_client_JsonSerializationContext_$newJsonWriter__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2_writer_0);
  try {
    if (ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapRootValue) {
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(writer);
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(writer, true);
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize++, 3);
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '{');
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$name__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_rootName);
      com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer = this$static.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2()) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer), writer, value_0, ctx, (com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT));
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer);
    }
     else {
      com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer = this$static.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2()) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer), writer, value_0, ctx, (com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT));
    }
    return writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out.java_lang_AbstractStringBuilder_string;
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 64)) {
      e = $e0;
      throw e;
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
      e = $e0;
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapExceptions?new com_github_nmorel_gwtjackson_client_exception_JsonSerializationException_JsonSerializationException__Ljava_lang_Throwable_2V(e):e);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V(rootName){
  this.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_rootName = rootName;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(63, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1AbstractObjectMapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractObjectMapper', 63);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(280, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonMappingContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonMappingContext', 280);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext_$newJsonReader__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2(input_0){
  var reader;
  reader = new com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NonBufferedJsonReader__Ljava_lang_String_2V(input_0);
  reader.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient = true;
  return reader;
}

function com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV(failOnUnknownProperties, wrapExceptions){
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_failOnUnknownProperties = failOnUnknownProperties;
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_unwrapRootValue = false;
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_wrapExceptions = wrapExceptions;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(141, 280, {}, com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV);
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_failOnUnknownProperties = false;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_unwrapRootValue = false;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_wrapExceptions = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonDeserializationContext', 141);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(this$static){
  return new com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV(this$static.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_failOnUnknownProperties, this$static.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_wrapExceptions);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(142, 1, {});
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_failOnUnknownProperties = true;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_wrapExceptions = true;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext$Builder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonDeserializationContext/Builder', 142);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(65, 142, {}, com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext$DefaultBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonDeserializationContext/DefaultBuilder', 65);
function com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(this$static, reader, ctx, params){
  if ((com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
    return com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader) , null;
  }
  return this$static.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(281, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonDeserializer', 281);
function com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V(){
  com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT = new com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V;
}

function com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(146, 1, {}, com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V);
var com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializerParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonDeserializerParameters', 146);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV(serializeNulls, wrapExceptions){
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls = serializeNulls;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_indent = false;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapRootValue = false;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapExceptions = wrapExceptions;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(143, 280, {}, com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV);
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_indent = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapExceptions = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapRootValue = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonSerializationContext', 143);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(this$static){
  return new com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV(this$static.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_serializeNulls, this$static.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_wrapExceptions);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(144, 1, {});
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_serializeNulls = true;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_wrapExceptions = true;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext$Builder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonSerializationContext/Builder', 144);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(53, 144, {}, com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext$DefaultBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonSerializationContext/DefaultBuilder', 53);
function com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this$static, writer, value_0, ctx, params){
  null == value_0?ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls?com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$nullValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer):(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null?(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = null):writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null && (writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = null) , writer):this$static.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(282, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonSerializer', 282);
function com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V(){
  com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT = new com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V;
}

function com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(149, 1, {}, com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V);
var com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializerParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonSerializerParameters', 149);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(285, 281, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BaseNumberJsonDeserializer', 285);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(235, 285, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return new java_lang_Double_Double__DV(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextDouble__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2D(reader));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$DoubleJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BaseNumberJsonDeserializer/DoubleJsonDeserializer', 235);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(236, 285, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return (com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)?java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextInt__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(reader)):java_lang_Integer_valueOf__ILjava_lang_Integer_2(java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader)));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$IntegerJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BaseNumberJsonDeserializer/IntegerJsonDeserializer', 236);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(237, 285, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextLong__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2J(reader));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$LongJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BaseNumberJsonDeserializer/LongJsonDeserializer', 237);
function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(258, 281, {}, com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  var com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0;
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader) , (com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN) == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextBoolean__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Z(reader)?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('true', com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader))?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextInt__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(reader) == 1?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):null;
}
;
var com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BooleanJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BooleanJsonDeserializer', 258);
function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(196, 281, {}, com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader);
}
;
var com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1StringJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'StringJsonDeserializer', 196);
function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$deserializeInline__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Lcom_github_nmorel_gwtjackson_client_deser_bean_IdentityDeserializationInfo_2Lcom_github_nmorel_gwtjackson_client_deser_bean_TypeDeserializationInfo_2Ljava_lang_String_2Ljava_util_Map_2Ljava_lang_Object_2(this$static, reader, ctx, bufferedProperties){
  var bean, instance, property, propertyName, requiredPropertiesLeft;
  requiredPropertiesLeft = this$static.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_requiredProperties.isEmpty__Z()?(java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1SET):new java_util_HashSet_HashSet__Ljava_util_Collection_2V(this$static.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_requiredProperties);
  instance = this$static.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_instanceBuilder.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties);
  bean = instance.com_github_nmorel_gwtjackson_client_deser_bean_Instance_instance;
  bufferedProperties = instance.com_github_nmorel_gwtjackson_client_deser_bean_Instance_bufferedProperties;
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$flushBufferedProperties__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Ljava_lang_Object_2Ljava_util_Map_2Ljava_util_Set_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2ZLjava_util_Set_2V(this$static, bean, bufferedProperties, requiredPropertiesLeft, ctx);
  while ((com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
    propertyName = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextName__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader);
    requiredPropertiesLeft.remove__Ljava_lang_Object_2Z(propertyName);
    property = com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$getPropertyDeserializer__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2ZLcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2(this$static, propertyName, ctx, false);
    property?property.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer && (property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer = property.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2()) , property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer), reader, ctx, (!property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters && (property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters = (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT)) , property.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters)), ctx):com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
  }
  if (!requiredPropertiesLeft.isEmpty__Z()) {
    throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V('Required properties are missing : ' + requiredPropertiesLeft);
  }
  return bean;
}

function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$flushBufferedProperties__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Ljava_lang_Object_2Ljava_util_Map_2Ljava_util_Set_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2ZLjava_util_Set_2V(this$static, bean, bufferedProperties, requiredPropertiesLeft, ctx){
  var bufferedProperty, bufferedProperty$iterator, property, propertyName;
  if (!!bufferedProperties && bufferedProperties.java_util_AbstractHashMap_size != 0) {
    for (bufferedProperty$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(bufferedProperties)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(bufferedProperty$iterator);) {
      bufferedProperty = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, bufferedProperty$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(bufferedProperty$iterator)) , bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_last = bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 14));
      propertyName = com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(bufferedProperty.getKey__Ljava_lang_Object_2());
      requiredPropertiesLeft.remove__Ljava_lang_Object_2Z(propertyName);
      property = com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$getPropertyDeserializer__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2ZLcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2(this$static, propertyName, ctx, false);
      !!property && com_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(property, com_github_nmorel_gwtjackson_client_JsonDeserializationContext_$newJsonReader__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2(com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(bufferedProperty.getValue__Ljava_lang_Object_2())), bean, ctx);
    }
  }
}

function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$getPropertyDeserializer__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2ZLcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2(this$static, propertyName, ctx, ignoreUnknown){
  var property;
  property = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_deserializers[':' + propertyName], 8);
  if (!property) {
    if (!ignoreUnknown && ctx.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_failOnUnknownProperties) {
      throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V("Unknown property '" + propertyName + "'");
    }
  }
  return property;
}

function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V(){
  this.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_instanceBuilder = this.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2();
  this.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_deserializers = this.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2();
  java_util_Collections_$clinit__V();
  this.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_requiredProperties = (null , java_util_Collections_EMPTY_1SET);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(33, 281, {});
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  var result, com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$deserializeWrapped__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Lcom_github_nmorel_gwtjackson_client_deser_bean_IdentityDeserializationInfo_2Lcom_github_nmorel_gwtjackson_client_deser_bean_TypeDeserializationInfo_2Ljava_lang_String_2Ljava_lang_Object_2_result_0;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader);
  if (this.com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_instanceBuilder) {
    result = (com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$beginObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader) , com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$deserializeWrapped__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Lcom_github_nmorel_gwtjackson_client_deser_bean_IdentityDeserializationInfo_2Lcom_github_nmorel_gwtjackson_client_deser_bean_TypeDeserializationInfo_2Ljava_lang_String_2Ljava_lang_Object_2_result_0 = com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$deserializeInline__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Lcom_github_nmorel_gwtjackson_client_deser_bean_IdentityDeserializationInfo_2Lcom_github_nmorel_gwtjackson_client_deser_bean_TypeDeserializationInfo_2Ljava_lang_String_2Ljava_util_Map_2Ljava_lang_Object_2(this, reader, ctx, null) , com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader) , com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_$deserializeWrapped__Lcom_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Lcom_github_nmorel_gwtjackson_client_deser_bean_IdentityDeserializationInfo_2Lcom_github_nmorel_gwtjackson_client_deser_bean_TypeDeserializationInfo_2Ljava_lang_String_2Ljava_lang_Object_2_result_0);
  }
   else {
    throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V('Cannot instantiate the type ' + java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.getDeserializedType__Ljava_lang_Class_2()));
  }
  return result;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  return {};
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1AbstractBeanJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'AbstractBeanJsonDeserializer', 33);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(283, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1HasDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'HasDeserializer', 283);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(284, 283, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1HasDeserializerAndParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'HasDeserializerAndParameters', 284);
function com_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(this$static, reader, bean, ctx){
  this$static.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer && (this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer = this$static.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2()) , this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer), reader, ctx, (!this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters && (this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters = (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT)) , this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters)), ctx);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(8, 284, $intern_8);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1BeanPropertyDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'BeanPropertyDeserializer', 8);
function com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(instance, bufferedProperties){
  this.com_github_nmorel_gwtjackson_client_deser_bean_Instance_instance = instance;
  this.com_github_nmorel_gwtjackson_client_deser_bean_Instance_bufferedProperties = bufferedProperties;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(34, 1, {}, com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1Instance_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'Instance', 34);
function com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static[':' + key] = value_0;
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this$static){
  var className, msg;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz$);
  msg = this$static.getMessage__Ljava_lang_String_2();
  return msg != null?className + ': ' + msg:className;
}

function java_lang_Throwable_Throwable__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(6, 1, $intern_9);
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Throwable', 6);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(49, 6, $intern_9);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Exception', 49);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_Throwable__V.call(this);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(5, 49, $intern_10, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'RuntimeException', 5);
function com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(cause);
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(62, 5, $intern_10);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonMappingException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonMappingException', 62);
function com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_Throwable_2V(cause){
  com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(20, 62, $intern_12, com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V, com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonDeserializationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonDeserializationException', 20);
function com_github_nmorel_gwtjackson_client_exception_JsonSerializationException_JsonSerializationException__Ljava_lang_Throwable_2V(cause){
  com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(64, 62, {64:1, 3:1, 5:1, 6:1}, com_github_nmorel_gwtjackson_client_exception_JsonSerializationException_JsonSerializationException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonSerializationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonSerializationException', 64);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(286, 282, {});
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, value_0);
}
;
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  this.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 36), ctx, params);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer', 286);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(247, 286, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2DLcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 17).java_lang_Double_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$DoubleJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/DoubleJsonSerializer', 247);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(248, 286, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V);
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$IntegerJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/IntegerJsonSerializer', 248);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(249, 286, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2JLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 25).java_lang_Long_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$LongJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/LongJsonSerializer', 249);
function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(259, 282, {}, com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 24).java_lang_Boolean_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BooleanJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BooleanJsonSerializer', 259);
function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(218, 282, {}, com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1StringJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'StringJsonSerializer', 218);
function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$getSerializer__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_ser_bean_InternalSerializer_2(this$static, value_0){
  if (java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(value_0) == this$static.getSerializedType__Ljava_lang_Class_2()) {
    return this$static;
  }
  java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(value_0);
  return this$static;
}

function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$serializeInternally__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2Lcom_github_nmorel_gwtjackson_client_ser_bean_IdentitySerializationInfo_2Lcom_github_nmorel_gwtjackson_client_ser_bean_TypeSerializationInfo_2V(this$static, writer, value_0, ctx){
  java_util_Collections_$clinit__V();
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(writer);
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(writer, true);
  com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize++, 3);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '{');
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$serializeProperties__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_util_Set_2Lcom_github_nmorel_gwtjackson_client_ser_bean_IdentitySerializationInfo_2V(this$static, writer, value_0, ctx);
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer);
}

function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$serializeProperties__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_util_Set_2Lcom_github_nmorel_gwtjackson_client_ser_bean_IdentitySerializationInfo_2V(this$static, writer, value_0, ctx){
  var propertySerializer, propertySerializer$array, propertySerializer$index, propertySerializer$max;
  for (propertySerializer$array = this$static.com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_serializers , propertySerializer$index = 0 , propertySerializer$max = propertySerializer$array.length; propertySerializer$index < propertySerializer$max; ++propertySerializer$index) {
    propertySerializer = propertySerializer$array[propertySerializer$index];
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$unescapeName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_propertyName);
    com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V((!propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_HasSerializer_serializer && (propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_HasSerializer_serializer = propertySerializer.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2()) , propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_HasSerializer_serializer), writer, propertySerializer.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(value_0, ctx), ctx, (!propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_parameters && (propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_parameters = (com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT)) , propertySerializer.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_parameters));
  }
}

function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V(){
  this.com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_serializers = this.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2();
  java_util_Collections_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(27, 282, {});
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$serializeInternally__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2Lcom_github_nmorel_gwtjackson_client_ser_bean_IdentitySerializationInfo_2Lcom_github_nmorel_gwtjackson_client_ser_bean_TypeSerializationInfo_2V(com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$getSerializer__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_ser_bean_InternalSerializer_2(this, value_0), writer, value_0, ctx);
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 0, 0, 1);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1AbstractBeanJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'AbstractBeanJsonSerializer', 27);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(7, 1, {7:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1HasSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'HasSerializer', 7);
function com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V(propertyName){
  this.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_propertyName = propertyName;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(4, 7, $intern_16);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'BeanPropertySerializer', 4);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(57, 1, {3:1, 43:1, 57:1});
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Enum_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Enum', 57);
function com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V(){
  com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('BEGIN_ARRAY', 0);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('END_ARRAY', 1);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('BEGIN_OBJECT', 2);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('END_OBJECT', 3);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('NAME', 4);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('STRING', 5);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('NUMBER', 6);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('BOOLEAN', 7);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('NULL', 8);
  com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT = new com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV('END_DOCUMENT', 9);
}

function com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  this.java_lang_Enum_name = enum$name;
  this.java_lang_Enum_ordinal = enum$ordinal;
}

function com_github_nmorel_gwtjackson_client_stream_JsonToken_values___3Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(){
  com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1JsonToken_12_1classLit, 1), $intern_14, 21, 0, [com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME, com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING, com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER, com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN, com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(21, 57, {21:1, 3:1, 43:1, 57:1}, com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV);
var com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME, com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL, com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER, com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1JsonToken_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.github.nmorel.gwtjackson.client.stream', 'JsonToken', 21, com_github_nmorel_gwtjackson_client_stream_JsonToken_values___3Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2);
function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static){
  var context;
  context = com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2I(this$static);
  if (context == 5) {
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, 44);
  }
   else if (context != 3) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_17);
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize - 1, 4);
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, root){
  switch (com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2I(this$static)) {
    case 7:
      if (!this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient) {
        throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('JSON must have only one top-level value.');
      }

    case 6:
      if (!this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient && !root) {
        throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('JSON must start with an array or an object.');
      }

      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize - 1, 7);
      break;
    case 1:
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize - 1, 2);
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
      break;
    case 2:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, 44);
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
      break;
    case 4:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_separator);
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize - 1, 5);
      break;
    default:throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_17);
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$checkName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2V(this$static, name_0){
  if (name_0 == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('name == null');
  }
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null || this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize == 0) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_18);
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static){
  var context;
  context = com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2I(this$static);
  if (context != 5 && context != 3) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_17);
  }
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null || this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Dangling name: ' + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName == null?this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName:this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName));
  }
  --this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize;
  context == 5 && com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '}');
  return this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$name__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(this$static, name_0){
  return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$checkName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2V(this$static, name_0) , this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = name_0 , this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static){
  var i, size_0;
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_indent == null) {
    return;
  }
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '\n');
  for (i = 1 , size_0 = this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize; i < size_0; i++) {
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_indent);
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$nullValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static){
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null || this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null) {
    if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_serializeNulls) {
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
    }
     else {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = null;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = null;
      return this$static;
    }
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, $intern_19);
  return this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2I(this$static){
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize == 0) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_18);
  }
  return this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack[this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize - 1];
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$string__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2V(this$static, value_0){
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(value_0));
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$unescapeName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(this$static, name_0){
  return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$checkName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2V(this$static, name_0) , this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = name_0 , this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2DLcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static, value_0){
  if (isNaN(value_0) || java_lang_Double_isInfinite__DZ(value_0)) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_20 + value_0);
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '' + value_0);
  return this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2JLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(this$static, value_0){
  return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static) , com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false) , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(value_0)) , this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static, value_0){
  var string;
  if (!value_0) {
    return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$nullValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static);
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  string = value_0.toString__Ljava_lang_String_2$();
  if (!this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient && (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(string, '-Infinity') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(string, 'Infinity') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(string, 'NaN'))) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_20 + value_0);
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, string);
  return this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static, value_0){
  if (value_0 == null) {
    return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$nullValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static);
  }
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(value_0));
  return this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(this$static, value_0){
  return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static) , com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false) , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, value_0?'true':'false') , this$static;
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static){
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null) {
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, 34), this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName), 34);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = null;
  }
   else if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null) {
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$string__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2V(this$static, this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = null;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_FastJsonWriter__Ljava_lang_StringBuilder_2V(out){
  this.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack = [];
  com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, this.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize++, 6);
  this.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out = out;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(148, 1, {}, com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_FastJsonWriter__Ljava_lang_StringBuilder_2V);
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient = false;
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_separator = ':';
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_serializeNulls = true;
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1FastJsonWriter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'FastJsonWriter', 148);
function com_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_MalformedJsonException__Ljava_lang_String_2V(msg){
  com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(184, 20, $intern_12, com_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_MalformedJsonException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1MalformedJsonException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'MalformedJsonException', 184);
function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$clinit__V(){
  var java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX = (java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0 = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, $intern_14, 0, 5, 7, 1) , java_lang_String_$getChars__Ljava_lang_String_2II_3CIV(java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0, 0) , java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0);
  new java_math_BigInteger_BigInteger__Ljava_lang_String_2V($intern_22);
  new java_math_BigInteger_BigInteger__Ljava_lang_String_2V('9223372036854775807');
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$beginObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 1) {
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize++, 3);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected BEGIN_OBJECT but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  if (!this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient) {
    throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Use JsonReader.setLenient(true) to accept malformed JSON'));
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$consumeNonExecutePrefix__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var i;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
  --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX.length > this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
    return;
  }
  for (i = 0; i < com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX.length; i++) {
    if (java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i) != com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX[i]) {
      return;
    }
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX.length;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static){
  var c, c0, c1, peekStack, result;
  peekStack = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack[this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize - 1];
  if (peekStack == 1) {
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize - 1, 2);
  }
   else if (peekStack == 2) {
    c0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
    switch (c0) {
      case 93:
        return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 4;
      case 59:
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      case 44:
        break;
      default:throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Unterminated array'));
    }
  }
   else if (peekStack == 3 || peekStack == 5) {
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize - 1, 4);
    if (peekStack == 5) {
      c0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
      switch (c0) {
        case 125:
          return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 2;
        case 59:
          com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
        case 44:
          break;
        default:throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Unterminated object'));
      }
    }
    c1 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
    switch (c1) {
      case 34:
        return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 13;
      case 39:
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
        return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 12;
      case 125:
        if (peekStack != 5) {
          return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 2;
        }
         else {
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_25));
        }

      default:com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
        --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
        if (com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$isLiteral__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CZ(this$static, c1 & $intern_26)) {
          return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 14;
        }
         else {
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_25));
        }

    }
  }
   else if (peekStack == 4) {
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize - 1, 5);
    c0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
    switch (c0) {
      case 58:
        break;
      case 61:
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
        this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit && java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos) == 62 && ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
        break;
      default:throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, "Expected ':'"));
    }
  }
   else if (peekStack == 6) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient && com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$consumeNonExecutePrefix__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize - 1, 7);
  }
   else if (peekStack == 7) {
    c0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, false);
    if (c0 == -1) {
      return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 17;
    }
     else {
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
    }
  }
   else if (peekStack == 8) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('JsonReader is closed');
  }
  c = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, true);
  switch (c) {
    case 93:
      if (peekStack == 1) {
        return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 4;
      }

    case 59:
    case 44:
      if (peekStack == 1 || peekStack == 2) {
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
        --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
        return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 7;
      }
       else {
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Unexpected value'));
      }

    case 39:
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 8;
    case 34:
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize == 1 && com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 9;
    case 91:
      return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 3;
    case 123:
      return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 1;
    default:--this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize == 1 && com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
  result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peekKeyword__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static);
  if (result != 0) {
    return result;
  }
  result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peekNumber__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static);
  if (result != 0) {
    return result;
  }
  if (!com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$isLiteral__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CZ(this$static, java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos))) {
    throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Expected value'));
  }
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
  return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 10;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 2) {
    --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize;
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected END_OBJECT but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$isLiteral__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CZ(this$static, c){
  switch (c) {
    case 47:
    case 92:
    case 59:
    case 35:
    case 61:
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
    case 123:
    case 125:
    case 91:
    case 93:
    case 58:
    case 44:
    case 32:
    case 9:
    case 12:
    case 13:
    case 10:
      return false;
    default:return true;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextBoolean__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Z(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 5) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
    return true;
  }
   else if (p == 6) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
    return false;
  }
  throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected a boolean but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextDouble__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2D(this$static){
  var p, result;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 15) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
    return com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong);
  }
  if (p == 16) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength;
  }
   else if (p == 8 || p == 9) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, p == 8?39:34);
  }
   else if (p == 10) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static);
  }
   else if (p != 11) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected a double but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 11;
  result = java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString);
  if (!this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient && (isNaN(result) || java_lang_Double_isInfinite__DZ(result))) {
    throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'JSON forbids NaN and infinities: ' + result));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = null;
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextInt__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static){
  var asDouble, p, result;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 15) {
    result = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong);
    if (com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(result))) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_27 + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
    }
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
    return result;
  }
  if (p == 16) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength;
  }
   else if (p == 8 || p == 9) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, p == 8?39:34);
    try {
      result = java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString);
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
      return result;
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 12))
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_27 + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 11;
  asDouble = java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString);
  result = com_google_gwt_lang_Cast_round_1int__DI(asDouble);
  if (result != asDouble) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_27 + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = null;
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextLong__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2J(this$static){
  var asDouble, p, result, result0;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 15) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
    return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong;
  }
  if (p == 16) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength;
  }
   else if (p == 8 || p == 9) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, p == 8?39:34);
    try {
      result0 = java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString);
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
      return result0;
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 12))
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_28 + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 11;
  asDouble = java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString);
  result = com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(asDouble);
  if (com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(result) != asDouble) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_28 + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = null;
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextName__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static){
  var p, result;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 14) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static);
  }
   else if (p == 12) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, 39);
  }
   else if (p == 13) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, 34);
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected a name but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextNonWhitespace__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2ZI(this$static, throwOnEof){
  var c, mess, p, peek;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
  while (true) {
    if (p == this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      break;
    }
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, p++);
    if (c == 10) {
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = p;
      continue;
    }
     else if (c == 32 || c == 13 || c == 9) {
      continue;
    }
    if (c == 47) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      if (p == this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
        return 47;
      }
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      peek = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos);
      switch (peek) {
        case 42:
          ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
          if (!com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipTo__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Z(this$static)) {
            throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, 'Unterminated comment'));
          }

          p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + 2;
          continue;
        case 47:
          ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
          com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipToEndOfLine__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
          p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
          continue;
        default:return 47;
      }
    }
     else if (c == 35) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipToEndOfLine__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
    }
     else {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      return c;
    }
  }
  if (throwOnEof) {
    mess = 'End of input at line ' + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1);
    throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V(mess);
  }
   else {
    return -1;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, quote_0){
  var builder, c, p, start_0;
  builder = new java_lang_StringBuilder_StringBuilder__V;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
  start_0 = p;
  while (p < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, p++);
    if (c == quote_0) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, start_0, p - 1));
      return builder.java_lang_AbstractStringBuilder_string;
    }
     else if (c == 92) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, start_0, p - 1));
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(builder, com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$readEscapeCharacter__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2C(this$static));
      p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
      start_0 = p;
    }
     else if (c == 10) {
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = p;
    }
  }
  throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_29));
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static){
  var p, result;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 10) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static);
  }
   else if (p == 8) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, 39);
  }
   else if (p == 9) {
    result = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CLjava_lang_String_2(this$static, 34);
  }
   else if (p == 11) {
    result = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString;
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedString = null;
  }
   else if (p == 15) {
    result = '' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong);
  }
   else if (p == 16) {
    result = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength;
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected a string but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(this$static){
  var i, result;
  i = 0;
  findNonLiteralCharacter: for (; this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit; i++) {
    switch (java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i)) {
      case 47:
      case 92:
      case 59:
      case 35:
      case 61:
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 44:
      case 32:
      case 9:
      case 12:
      case 13:
      case 10:
        break findNonLiteralCharacter;
    }
  }
  result = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i);
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += i;
  return result;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  switch (p) {
    case 1:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT;
    case 2:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT;
    case 3:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY;
    case 4:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY;
    case 12:
    case 13:
    case 14:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME;
    case 5:
    case 6:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN;
    case 7:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL;
    case 8:
    case 9:
    case 10:
    case 11:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING;
    case 15:
    case 16:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER;
    case 17:
      return com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT;
    default:throw new java_lang_AssertionError_AssertionError__V;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peekKeyword__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static){
  var c, i, keyword, keywordUpper, length_0, peeking;
  c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos);
  if (c == 116 || c == 84) {
    keyword = 'true';
    keywordUpper = 'TRUE';
    peeking = 5;
  }
   else if (c == 102 || c == 70) {
    keyword = 'false';
    keywordUpper = 'FALSE';
    peeking = 6;
  }
   else if (c == 110 || c == 78) {
    keyword = $intern_19;
    keywordUpper = 'NULL';
    peeking = 7;
  }
   else {
    return 0;
  }
  length_0 = keyword.length;
  for (i = 1; i < length_0; i++) {
    if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i >= this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
      return 0;
    }
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i);
    if (c != keyword.charCodeAt(i) && c != keywordUpper.charCodeAt(i)) {
      return 0;
    }
  }
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + length_0 < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit && com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$isLiteral__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CZ(this$static, java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + length_0))) {
    return 0;
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += length_0;
  return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = peeking;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peekNumber__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static){
  var c, fitsInLong, i, last, negative, newValue, value_0;
  value_0 = {l:0, m:0, h:0};
  negative = false;
  fitsInLong = true;
  last = 0;
  i = 0;
  charactersOfNumber: for (; true; i++) {
    if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i == this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
      break;
    }
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i);
    switch (c) {
      case 45:
        if (last == 0) {
          negative = true;
          last = 1;
          continue;
        }
         else if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 43:
        if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 101:
      case 69:
        if (last == 2 || last == 4) {
          last = 5;
          continue;
        }

        return 0;
      case 46:
        if (last == 2) {
          last = 3;
          continue;
        }

        return 0;
      default:if (c < 48 || c > 57) {
          if (!com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$isLiteral__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CZ(this$static, c)) {
            break charactersOfNumber;
          }
          return 0;
        }

        if (last == 1 || last == 0) {
          value_0 = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(-(c - 48));
          last = 2;
        }
         else if (last == 2) {
          if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(value_0, {l:0, m:0, h:0})) {
            return 0;
          }
          newValue = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0, {l:10, m:0, h:0}), com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(c - 48));
          fitsInLong = fitsInLong & (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(value_0, {l:3355444, m:838860, h:996147}) || com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(value_0, {l:3355444, m:838860, h:996147}) && com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(newValue, {l:3355444, m:838860, h:996147}));
          value_0 = newValue;
        }
         else 
          last == 3?(last = 4):(last == 5 || last == 6) && (last = 7);
    }
  }
  if (last == 2 && fitsInLong && (com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(value_0, {l:0, m:0, h:$intern_30}) || negative)) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong = negative?value_0:com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += i;
    return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 15;
  }
   else if (last == 2 || last == 4 || last == 7) {
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength = i;
    return this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 16;
  }
   else {
    return 0;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$readEscapeCharacter__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2C(this$static){
  var c, end, escaped, i, result;
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos == this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
    throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_31));
  }
  escaped = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos++);
  switch (escaped) {
    case 117:
      if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + 4 > this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_31));
      }

      result = 0;
      for (i = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos , end = i + 4; i < end; i++) {
        c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, i);
        result = result << 4 & $intern_26;
        if (c >= 48 && c <= 57) {
          result = result + (c - 48) & $intern_26;
        }
         else if (c >= 97 && c <= 102) {
          result = result + (c - 97 + 10) & $intern_26;
        }
         else if (c >= 65 && c <= 70) {
          result = result + (c - 65 + 10) & $intern_26;
        }
         else {
          throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V('\\u' + java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + 4));
        }
      }

      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += 4;
      return result;
    case 116:
      return 9;
    case 98:
      return 8;
    case 110:
      return 10;
    case 114:
      return 13;
    case 102:
      return 12;
    case 10:
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
    case 39:
    case 34:
    case 92:
    default:return escaped;
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CV(this$static, quote_0){
  var c, l, p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
  l = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit;
  while (p < l) {
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, p++);
    if (c == quote_0) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      return;
    }
     else if (c == 92) {
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = p;
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$readEscapeCharacter__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2C(this$static);
      p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
    }
     else if (c == 10) {
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = p;
    }
  }
  throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, $intern_29));
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipTo__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Z(this$static){
  var c;
  outer: for (; this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + 2 <= this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit; this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos++) {
    if (java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos) == 10) {
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + 1;
      continue;
    }
    for (c = 0; c < 2; c++) {
      if (java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + c) != '*/'.charCodeAt(c)) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipToEndOfLine__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var c;
  while (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit) {
    c = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos++);
    if (c == 10) {
      ++this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber;
      this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
      break;
    }
     else if (c == 13) {
      break;
    }
  }
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var i;
  i = 0;
  for (; this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i < this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit; i++) {
    switch (java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos + i)) {
      case 47:
      case 92:
      case 59:
      case 35:
      case 61:
        com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$checkLenient__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static);
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 44:
      case 32:
      case 9:
      case 12:
      case 13:
      case 10:
        this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += i;
        return;
    }
  }
  this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += i;
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var count, p;
  count = 0;
  do {
    p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
    p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
    if (p == 3) {
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize++, 1);
      ++count;
    }
     else if (p == 1) {
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize++, 3);
      ++count;
    }
     else if (p == 4) {
      --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize;
      --count;
    }
     else if (p == 2) {
      --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize;
      --count;
    }
     else 
      p == 14 || p == 10?com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipUnquotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static):p == 8 || p == 12?com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CV(this$static, 39):p == 9 || p == 13?com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipQuotedValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2CV(this$static, 34):p == 16 && (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos += this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  }
   while (count != 0);
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$syntaxError__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_2(this$static, message){
  var mess;
  mess = message + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1);
  throw new com_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_MalformedJsonException__Ljava_lang_String_2V(mess);
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NonBufferedJsonReader__Ljava_lang_String_2V(in_$){
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$clinit__V();
  this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack = [];
  com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize++, 6);
  if (in_$ == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('in == null');
  }
  this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_in = in_$;
  this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit = in_$.length;
  if (this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit > 0 && in_$.charCodeAt(0) == 65279) {
    ++this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos;
    ++this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart;
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(145, 1, {}, com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NonBufferedJsonReader__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2$ = function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_toString__Ljava_lang_String_2(){
  return 'JsonReader at line ' + (this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1);
}
;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient = false;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_limit = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedLong = {l:0, m:0, h:0};
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peekedNumberLength = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos = 0;
_.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize = 0;
var com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1NonBufferedJsonReader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'NonBufferedJsonReader', 145);
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(127, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'Duration', 127);
function com_google_gwt_core_client_GWT_isScript__Z(){
  return true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(82, 5, $intern_10);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'JavaScriptExceptionBase', 82);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?$intern_19:com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  this.java_lang_Throwable_detailMessage = null;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(30, 82, {30:1, 3:1, 5:1, 6:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this);
  return this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'JavaScriptException', 30);
function com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(c, escapeTable){
  var lookedUp = com_google_gwt_core_client_JsonUtils_escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = (!com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2()) , com_google_gwt_core_client_JsonUtils_escapeTable);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return com_google_gwt_core_client_JsonUtils_throwIllegalArgumentException__Ljava_lang_String_2Ljava_lang_String_2V('Error parsing JSON: ' + e, json);
  }
}

function com_google_gwt_core_client_JsonUtils_throwIllegalArgumentException__Ljava_lang_String_2Ljava_lang_String_2V(message, data_0){
  throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message + '\n' + data_0);
}

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(260, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'Scheduler', 260);
function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    if (com_google_gwt_core_client_GWT_isScript__Z()) {
      return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    }
     else {
      var _ = com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
      _ != null && (_ = _.val);
      return _;
    }
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  while (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleIncremental__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, true]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(queue, task);
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].execute__V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 6)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 30)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 30).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  function callback(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    !com_google_gwt_core_client_GWT_isScript__Z() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(118, 260, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl', 118);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(119, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl/Flusher', 119);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(120, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl/Rescuer', 120);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(throwable, reference){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2Ljava_lang_Object_2V(throwable, reference);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || com_google_gwt_core_client_impl_StackTraceCreator_ANONYMOUS;
}

var com_google_gwt_core_client_impl_StackTraceCreator_ANONYMOUS = 'anonymous', com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(271, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/Collector', 271);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(83, 271, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, thrownIgnored){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorLegacy', 83);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  Error.stackTraceLimit = 64;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(272, 271, {});
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorModern', 272);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(84, 272, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorModernNoSourceMap', 84);
function com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw new java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalPositionIndexes__IIIV(start_0, end, size_0){
  if (start_0 < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_33 + start_0 + ' < 0');
  }
  if (end > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('toIndex: ' + end + ' > size ' + size_0);
  }
  if (start_0 > end) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_33 + start_0 + ' > toIndex: ' + end);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return reference;
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(reference, errorMessage){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(expression){
  if (!expression) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(279, 1, {});
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONValue', 279);
function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(66, 279, {66:1}, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 66)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONArray_jsArray == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 66).com_google_gwt_json_client_JSONArray_jsArray;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONArray_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this.com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONArray_toString__Ljava_lang_String_2(){
  var c, i, sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_v_0, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_func_0;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  for (i = 0 , c = this.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; i++) {
    i > 0 && (sb.java_lang_AbstractStringBuilder_string += ',' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, (com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_v_0 = this.com_google_gwt_json_client_JSONArray_jsArray[i] , com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_func_0 = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_v_0] , com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_func_0?com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_func_0(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_v_0):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2_v_0)));
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONArray', 66);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(78, 279, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONBoolean', 78);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(147, 5, $intern_10, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONException', 147);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(181, 279, {}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_19;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONNull', 181);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(55, 279, {55:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 55)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 55).com_google_gwt_json_client_JSONNumber_value;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONNumber_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI((new java_lang_Double_Double__DV(this.com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value);
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONNumber_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONNumber_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_json_client_JSONNumber_value + '';
}
;
_.com_google_gwt_json_client_JSONNumber_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONNumber', 55);
function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  if (key == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
}

function com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  var ret = func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  return ret;
}

function com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  first = true;
  keys_0 = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_14, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.java_lang_AbstractStringBuilder_string += ', ' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(key));
    sb.java_lang_AbstractStringBuilder_string += ':';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsValue){
  this.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(46, 279, {46:1}, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 46)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONObject_jsObject == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 46).com_google_gwt_json_client_JSONObject_jsObject;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONObject_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this.com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONObject_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONObject_toString__Ljava_lang_String_2(){
  return com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONObject', 46);
function com_google_gwt_json_client_JSONParser_$clinit__V(){
  com_google_gwt_json_client_JSONParser_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2, number:com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2, string:com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2, object:com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, undefined:com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2};
}

function com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2(v){
  return com_google_gwt_json_client_JSONBoolean_$clinit__V() , v?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE;
}

function com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
   else {
    return new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2(){
  return null;
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0){
  if (value_0 == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  this.com_google_gwt_json_client_JSONString_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(56, 279, {56:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 56)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 56).com_google_gwt_json_client_JSONString_value);
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONString', 56);
function com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(array), array.java_lang_Object_castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(array, length_0){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(0, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(array), array.java_lang_Object_castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz$ = arrayClass;
  array.java_lang_Object_castableTypeMap$ = castableTypeMap;
  array.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1LONG:
      initValue = {l:0, m:0, h:0};
      break;
    case com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1NUMBER:
      initValue = 0;
      break;
    case com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0)) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

      case 2:
        if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0))) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0)) && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

var com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1BOOLEAN = 8, com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1LONG = 6, com_google_gwt_lang_Array_TYPE_1PRIMITIVE_1NUMBER = 7;
function com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse){
  if (e && typeof e == $intern_0) {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 30)) {
    jse = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 30);
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) !== com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2((com_google_gwt_core_client_JavaScriptException_$clinit__V() , com_google_gwt_core_client_JavaScriptException_NOT_1SET))) {
      return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:jse.com_google_gwt_core_client_JavaScriptException_e;
    }
  }
  return e;
}

function com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 6)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(jse, e);
    com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse);
  }
  return jse;
}

function com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_35;
  a1 = value_0 >> 22 & $intern_35;
  a2 = value_0 < 0?$intern_36:0;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
}

function com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
}

function com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(l, m, h){
  return {l:l, m:m, h:h};
}

function com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  if (b.h == $intern_30 && b.m == 0 && b.l == 0) {
    return com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(b);
    negative = true;
  }
  bpower = com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_30 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
      negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
      computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b)) {
    computeRemainder && (aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h)));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  return com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(aIsCopy?a:com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder){
  if (a.h == $intern_30 && a.m == 0 && a.l == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE));
  }
  computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
}

function com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
  if (computeRemainder) {
    a = com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
    aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  }
  return c;
}

function com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0;
  shift_0 = com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b) - com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a);
  bshift = com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b, shift_0);
  quotient = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  while (shift_0 >= 0) {
    gte = com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 = bshift.m;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 = bshift.h;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 = bshift.l;
    com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(bshift, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 >>> 1);
    bshift.m = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 & 1) << 21;
    bshift.l = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 & 1) << 21;
    --shift_0;
  }
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
      aIsMinValue && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLibBase_remainder, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE)));
    }
     else {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(b0, b1, b2);
}

function com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_35;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_35;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_36;
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg0);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg1);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg2);
}

function com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  var b1, b2;
  b2 = java_lang_Integer_numberOfLeadingZeros__II(a.h);
  if (b2 == 32) {
    b1 = java_lang_Integer_numberOfLeadingZeros__II(a.m);
    return b1 == 32?java_lang_Integer_numberOfLeadingZeros__II(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(h) + 44;
  }
  return -1;
}

function com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.h = x_0;
}

function com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.l = x_0;
}

function com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.m = x_0;
}

function com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  return a.l + a.m * $intern_37 + a.h * $intern_38;
}

function com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum0 & $intern_35);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum1 & $intern_35);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum2 & $intern_36);
  return true;
}

var com_google_gwt_lang_LongLibBase_remainder;
function com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_35, m:sum1 & $intern_35, h:sum2 & $intern_36};
}

function com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, false);
}

function com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (value_0 < $intern_39) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_38) {
    a2 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_38);
    value_0 -= a2 * $intern_38;
  }
  a1 = 0;
  if (value_0 >= $intern_37) {
    a1 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_37);
    value_0 -= a1 * $intern_37;
  }
  a0 = com_google_gwt_lang_Cast_round_1int__DI(value_0);
  result = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(result);
  return result;
}

function com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    com_google_gwt_lang_LongLib_boxedValues == null && (com_google_gwt_lang_LongLib_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit, $intern_14, 292, 256, 0, 1));
    result = com_google_gwt_lang_LongLib_boxedValues[rebase];
    !result && (result = com_google_gwt_lang_LongLib_boxedValues[rebase] = com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0));
    return result;
  }
  return com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0);
}

function com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return !com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b);
}

function com_google_gwt_lang_LongLib_lte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return !com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b);
}

function com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, true);
  return com_google_gwt_lang_LongLibBase_remainder;
}

function com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_35;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_35;
  c2 += c1 >> 22;
  c1 &= $intern_35;
  c2 &= $intern_36;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(c0, c1, c2);
}

function com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_35;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_35;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_36;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(neg0, neg1, neg2);
}

function com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function com_google_gwt_lang_LongLib_or__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_35, m:res1 & $intern_35, h:res2 & $intern_36};
}

function com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_30) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_36:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_36:0;
    res1 = negative?$intern_35:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_35, m:res1 & $intern_35, h:res2 & $intern_36};
}

function com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_36;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_35, m:res1 & $intern_35, h:res2 & $intern_36};
}

function com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_35, m:sum1 & $intern_35, h:sum2 & $intern_36};
}

function com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return $intern_39;
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, com_google_gwt_lang_LongLib$Const_ZERO)) {
    return -com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  return a.l + a.m * $intern_37 + a.h * $intern_38;
}

function com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  return a.l | a.m << 22;
}

function com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_30 && a.m == 0 && a.l == 0) {
    return $intern_22;
  }
  if (a.h >> 19 != 0) {
    return '-' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1000000000);
    rem = com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(rem, tenPowerLong, true);
    digits = '' + com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLibBase_remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

var com_google_gwt_lang_LongLib_boxedValues;
function com_google_gwt_lang_LongLib$Const_$clinit__V(){
  com_google_gwt_lang_LongLib$Const_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2($intern_35, $intern_35, 524287);
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, $intern_30);
  com_google_gwt_lang_LongLib$Const_ONE = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(2);
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(0);
}

var com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_ONE, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(o){
  return o.java_lang_Object_typeMarker$ === com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
}

function com_google_gwt_lang_it_100046appify_100046examples_100046Examples_1_1EntryMethodHolder_init__V(){
  var it_appify_examples_client_AppifyEntryPoint_$onModuleLoad__Lit_appify_examples_client_AppifyEntryPoint_2V_myApp_0, it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1, it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_c_1;
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  it_appify_examples_client_AppifyEntryPoint_$onModuleLoad__Lit_appify_examples_client_AppifyEntryPoint_2V_myApp_0 = new it_appify_examples_client_app_ExampleAppImpl_ExampleAppImpl__V;
  it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2Lit_appify_app_WebApp$AppListener_2V(it_appify_examples_client_AppifyEntryPoint_$onModuleLoad__Lit_appify_examples_client_AppifyEntryPoint_2V_myApp_0, (it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1 = new it_appify_examples_client_model_AppModel_AppModel__Ljava_lang_String_2V , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1.it_appify_examples_client_model_AppModel_content = 'Lorem Ipsum Content' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1.it_appify_examples_client_model_AppModel_chilePageTitle = 'Child Page Title' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1.it_appify_examples_client_model_AppModel_childPageContent = 'Child Page Content' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1.it_appify_examples_client_model_AppModel_input = 'Input text injected' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_c_1 = new it_appify_examples_client_model_ChildModel_ChildModel__V , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_c_1.it_appify_examples_client_model_ChildModel_title = 'Child object Title' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_c_1.it_appify_examples_client_model_ChildModel_content = 'Child object content' , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1.it_appify_examples_client_model_AppModel_child = it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_c_1 , it_appify_examples_client_AppifyEntryPoint_$initializeAppState__Lit_appify_examples_client_AppifyEntryPoint_2Lit_appify_examples_client_model_AppModel_2_m_1), new it_appify_examples_client_AppifyEntryPoint$1_AppifyEntryPoint$1__Lit_appify_examples_client_AppifyEntryPoint_2V(it_appify_examples_client_AppifyEntryPoint_$onModuleLoad__Lit_appify_examples_client_AppifyEntryPoint_2V_myApp_0));
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(it_appify_examples_client_AppifyEntryPoint_$onModuleLoad__Lit_appify_examples_client_AppifyEntryPoint_2V_myApp_0.it_appify_app_AbstractWebApp_modelView), 10);
}

function com_google_gwt_storage_client_Storage_$getItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2(this$static, key){
  return com_google_gwt_storage_client_StorageImpl_$getItem__Lcom_google_gwt_storage_client_StorageImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(this$static.com_google_gwt_storage_client_Storage_storage, key);
}

function com_google_gwt_storage_client_Storage_$setItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, key, data_0){
  com_google_gwt_storage_client_StorageImplNonNativeEvents_$setItem__Lcom_google_gwt_storage_client_StorageImplNonNativeEvents_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.com_google_gwt_storage_client_Storage_storage, key, data_0);
}

function com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V(){
  this.com_google_gwt_storage_client_Storage_storage = $intern_40;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(180, 1, {}, com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V);
var com_google_gwt_storage_client_Storage_localStorage;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1storage_1client_1Storage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.storage.client', 'Storage', 180);
function com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V(){
  com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_storage_client_Storage$StorageSupportDetector_localStorageSupported = com_google_gwt_storage_client_Storage$StorageSupportDetector_checkStorageSupport__Ljava_lang_String_2Z($intern_40);
  com_google_gwt_storage_client_Storage$StorageSupportDetector_checkStorageSupport__Ljava_lang_String_2Z('sessionStorage');
}

function com_google_gwt_storage_client_Storage$StorageSupportDetector_checkStorageSupport__Ljava_lang_String_2Z(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var com_google_gwt_storage_client_Storage$StorageSupportDetector_localStorageSupported = false;
function com_google_gwt_storage_client_StorageImpl_$getItem__Lcom_google_gwt_storage_client_StorageImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(storage, key){
  return $wnd[storage].getItem(key);
}

function com_google_gwt_storage_client_StorageImplNonNativeEvents_$setItem__Lcom_google_gwt_storage_client_StorageImplNonNativeEvents_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V(storage, key, data_0){
  com_google_gwt_storage_client_StorageImpl_$getItem__Lcom_google_gwt_storage_client_StorageImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(storage, key);
  $wnd[storage].setItem(key, data_0);
}

function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_14, 2, 4, [$intern_41]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_41, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie9', runtimeValue)) {
    throw new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue);
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(58, 6, $intern_9);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Error', 58);
function java_lang_AssertionError_AssertionError__V(){
  java_lang_Throwable_Throwable__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(15, 58, $intern_9, java_lang_AssertionError_AssertionError__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'AssertionError', 15);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, '' + ($intern_42 + runtimeValue + ').\n' + $intern_43), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_42 + runtimeValue + ').\n' + $intern_43, 6)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_42 + runtimeValue + ').\n' + $intern_43, 6):null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(80, 15, $intern_9, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 80);
function com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function it_appify_api_BatteryStatus_$setCharging__Lit_appify_api_BatteryStatus_2ZV(this$static, charging){
  this$static.it_appify_api_BatteryStatus_charging = charging;
}

function it_appify_api_BatteryStatus_$setLevel__Lit_appify_api_BatteryStatus_2DV(this$static, level){
  this$static.it_appify_api_BatteryStatus_level = level;
}

function it_appify_api_BatteryStatus_BatteryStatus__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(29, 1, {29:1, 3:1}, it_appify_api_BatteryStatus_BatteryStatus__V);
_.toString__Ljava_lang_String_2$ = function it_appify_api_BatteryStatus_toString__Ljava_lang_String_2(){
  return 'BatteryStatus [charging=' + this.it_appify_api_BatteryStatus_charging + ', level=' + this.it_appify_api_BatteryStatus_level + ']';
}
;
_.it_appify_api_BatteryStatus_charging = false;
_.it_appify_api_BatteryStatus_level = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatus', 29);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 33, {}, it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatus_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'charging', new it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_BatteryStatusBeanJsonDeserializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'level', new it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_BatteryStatusBeanJsonDeserializerImpl$3__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_BatteryStatusBeanJsonDeserializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonDeserializerImpl', 201);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_BatteryStatusBeanJsonDeserializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(202, 1, {}, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_BatteryStatusBeanJsonDeserializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_BatteryStatus_BatteryStatus__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonDeserializerImpl/1', 202);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_BatteryStatusBeanJsonDeserializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(203, 8, $intern_8, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_BatteryStatusBeanJsonDeserializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_BatteryStatus_$setCharging__Lit_appify_api_BatteryStatus_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 29), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 24).java_lang_Boolean_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonDeserializerImpl/2', 203);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_BatteryStatusBeanJsonDeserializerImpl$3__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(204, 8, $intern_8, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_BatteryStatusBeanJsonDeserializerImpl$3__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_BatteryStatus_$setLevel__Lit_appify_api_BatteryStatus_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 29), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 17).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonDeserializerImpl/3', 204);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(222, 27, {}, it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatus_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 2, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_BatteryStatusBeanJsonSerializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_BatteryStatusBeanJsonSerializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonSerializerImpl', 222);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl$1_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_BatteryStatus_charging?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_BatteryStatusBeanJsonSerializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'charging');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(223, 4, $intern_16, it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_BatteryStatusBeanJsonSerializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl$1_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 29));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonSerializerImpl/1', 223);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_BatteryStatusBeanJsonSerializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'level');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(224, 4, $intern_16, it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_BatteryStatusBeanJsonSerializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 29).it_appify_api_BatteryStatus_level);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'BatteryStatusBeanJsonSerializerImpl/2', 224);
function it_appify_api_Coordinates_$setAccuracy__Lit_appify_api_Coordinates_2IV(this$static, accuracy){
  this$static.it_appify_api_Coordinates_accuracy = accuracy;
}

function it_appify_api_Coordinates_$setAltitude__Lit_appify_api_Coordinates_2IV(this$static, altitude){
  this$static.it_appify_api_Coordinates_altitude = altitude;
}

function it_appify_api_Coordinates_$setAltitudeAccuracy__Lit_appify_api_Coordinates_2IV(this$static, altitudeAccuracy){
  this$static.it_appify_api_Coordinates_altitudeAccuracy = altitudeAccuracy;
}

function it_appify_api_Coordinates_$setHeading__Lit_appify_api_Coordinates_2IV(this$static, heading){
  this$static.it_appify_api_Coordinates_heading = heading;
}

function it_appify_api_Coordinates_$setLatitude__Lit_appify_api_Coordinates_2DV(this$static, latitude){
  this$static.it_appify_api_Coordinates_latitude = latitude;
}

function it_appify_api_Coordinates_$setLongitude__Lit_appify_api_Coordinates_2DV(this$static, longitude){
  this$static.it_appify_api_Coordinates_longitude = longitude;
}

function it_appify_api_Coordinates_$setSpeed__Lit_appify_api_Coordinates_2IV(this$static, speed){
  this$static.it_appify_api_Coordinates_speed = speed;
}

function it_appify_api_Coordinates_Coordinates__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13, 1, {13:1, 3:1}, it_appify_api_Coordinates_Coordinates__V);
_.toString__Ljava_lang_String_2$ = function it_appify_api_Coordinates_toString__Ljava_lang_String_2(){
  return 'Coordinates [accuracy=' + this.it_appify_api_Coordinates_accuracy + ', altitude=' + this.it_appify_api_Coordinates_altitude + ', altitudeAccuracy=' + this.it_appify_api_Coordinates_altitudeAccuracy + ', heading=' + this.it_appify_api_Coordinates_heading + ', latitude=' + this.it_appify_api_Coordinates_latitude + ', longitude=' + this.it_appify_api_Coordinates_longitude + ', speed=' + this.it_appify_api_Coordinates_speed + ']';
}
;
_.it_appify_api_Coordinates_accuracy = 0;
_.it_appify_api_Coordinates_altitude = 0;
_.it_appify_api_Coordinates_altitudeAccuracy = 0;
_.it_appify_api_Coordinates_heading = 0;
_.it_appify_api_Coordinates_latitude = 0;
_.it_appify_api_Coordinates_longitude = 0;
_.it_appify_api_Coordinates_speed = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Coordinates_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'Coordinates', 13);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(238, 33, {}, it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Coordinates_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_45, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'altitude', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_46, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'heading', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_47, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_48, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'speed', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl', 238);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(239, 1, {}, it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Coordinates_Coordinates__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/1', 239);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(240, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAccuracy__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/2', 240);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(241, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAltitude__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/3', 241);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(242, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAltitudeAccuracy__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/4', 242);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(243, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setHeading__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/5', 243);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(244, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setLatitude__Lit_appify_api_Coordinates_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 17).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/6', 244);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(245, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setLongitude__Lit_appify_api_Coordinates_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 17).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/7', 245);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(246, 8, $intern_8, it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setSpeed__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonDeserializerImpl/8', 246);
function it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(250, 27, {}, it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Coordinates_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 7, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_CoordinatesBeanJsonSerializerImpl$1_CoordinatesBeanJsonSerializerImpl$1__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_CoordinatesBeanJsonSerializerImpl$2_CoordinatesBeanJsonSerializerImpl$2__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_api_CoordinatesBeanJsonSerializerImpl$3_CoordinatesBeanJsonSerializerImpl$3__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 3, new it_appify_api_CoordinatesBeanJsonSerializerImpl$4_CoordinatesBeanJsonSerializerImpl$4__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 4, new it_appify_api_CoordinatesBeanJsonSerializerImpl$5_CoordinatesBeanJsonSerializerImpl$5__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 5, new it_appify_api_CoordinatesBeanJsonSerializerImpl$6_CoordinatesBeanJsonSerializerImpl$6__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 6, new it_appify_api_CoordinatesBeanJsonSerializerImpl$7_CoordinatesBeanJsonSerializerImpl$7__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl', 250);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_CoordinatesBeanJsonSerializerImpl$1__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_45);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(251, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$1_CoordinatesBeanJsonSerializerImpl$1__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_accuracy);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/1', 251);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_CoordinatesBeanJsonSerializerImpl$2__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'altitude');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(252, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$2_CoordinatesBeanJsonSerializerImpl$2__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_altitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/2', 252);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_CoordinatesBeanJsonSerializerImpl$3__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_46);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(253, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$3_CoordinatesBeanJsonSerializerImpl$3__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_altitudeAccuracy);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/3', 253);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_CoordinatesBeanJsonSerializerImpl$4__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'heading');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(254, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$4_CoordinatesBeanJsonSerializerImpl$4__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_heading);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/4', 254);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_CoordinatesBeanJsonSerializerImpl$5__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_47);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(255, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$5_CoordinatesBeanJsonSerializerImpl$5__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_latitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/5', 255);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_CoordinatesBeanJsonSerializerImpl$6__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_48);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(256, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$6_CoordinatesBeanJsonSerializerImpl$6__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_longitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/6', 256);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_CoordinatesBeanJsonSerializerImpl$7__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'speed');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(257, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$7_CoordinatesBeanJsonSerializerImpl$7__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 13).it_appify_api_Coordinates_speed);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'CoordinatesBeanJsonSerializerImpl/7', 257);
function it_appify_api_GeoOptions_GeoOptions__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(47, 1, {47:1, 3:1}, it_appify_api_GeoOptions_GeoOptions__V);
_.it_appify_api_GeoOptions_enableHighAccuracy = false;
_.it_appify_api_GeoOptions_maximumAge = {l:0, m:0, h:0};
_.it_appify_api_GeoOptions_timeout = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptions_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, $intern_49, 47);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(192, 27, {}, it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptions_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 3, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_GeoOptionsBeanJsonSerializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_GeoOptionsBeanJsonSerializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_GeoOptionsBeanJsonSerializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeoOptionsBeanJsonSerializerImpl', 192);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl$1_2Lit_appify_api_GeoOptions_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_GeoOptions_enableHighAccuracy?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_GeoOptionsBeanJsonSerializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'enableHighAccuracy');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(193, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_GeoOptionsBeanJsonSerializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl$1_2Lit_appify_api_GeoOptions_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 47));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeoOptionsBeanJsonSerializerImpl/1', 193);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_GeoOptionsBeanJsonSerializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'timeout');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(194, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_GeoOptionsBeanJsonSerializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 47).it_appify_api_GeoOptions_timeout);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeoOptionsBeanJsonSerializerImpl/2', 194);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_GeoOptionsBeanJsonSerializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'maximumAge');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(195, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_GeoOptionsBeanJsonSerializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 47).it_appify_api_GeoOptions_maximumAge);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeoOptionsBeanJsonSerializerImpl/3', 195);
function it_appify_api_Geoposition_$setTimestamp__Lit_appify_api_Geoposition_2JV(this$static, timestamp){
  this$static.it_appify_api_Geoposition_timestamp = timestamp;
}

function it_appify_api_Geoposition_Geoposition__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(28, 1, {28:1, 3:1}, it_appify_api_Geoposition_Geoposition__V);
_.toString__Ljava_lang_String_2$ = function it_appify_api_Geoposition_toString__Ljava_lang_String_2(){
  return 'Geoposition [timestamp=' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this.it_appify_api_Geoposition_timestamp) + ', coords=' + this.it_appify_api_Geoposition_coords + ']';
}
;
_.it_appify_api_Geoposition_timestamp = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Geoposition_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, $intern_50, 28);
function it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(186, 33, {}, it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Geoposition_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_51, new it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_52, new it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonDeserializerImpl', 186);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(187, 1, {}, it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Geoposition_Geoposition__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonDeserializerImpl/1', 187);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(188, 8, $intern_8, it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Geoposition_$setTimestamp__Lit_appify_api_Geoposition_2JV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 28), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 25).java_lang_Long_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonDeserializerImpl/2', 188);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_GeopositionBeanJsonDeserializerImpl$3_2Lit_appify_api_Geoposition_2Lit_appify_api_Coordinates_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_api_Geoposition_coords = value_0;
}

function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(189, 8, $intern_8, it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_GeopositionBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_GeopositionBeanJsonDeserializerImpl$3_2Lit_appify_api_Geoposition_2Lit_appify_api_Coordinates_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 28), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 13));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonDeserializerImpl/3', 189);
function it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(79, 27, {}, it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Geoposition_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 2, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_GeopositionBeanJsonSerializerImpl$1_GeopositionBeanJsonSerializerImpl$1__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_GeopositionBeanJsonSerializerImpl$2_GeopositionBeanJsonSerializerImpl$2__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonSerializerImpl', 79);
function it_appify_api_GeopositionBeanJsonSerializerImpl$1_GeopositionBeanJsonSerializerImpl$1__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_51);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(190, 4, $intern_16, it_appify_api_GeopositionBeanJsonSerializerImpl$1_GeopositionBeanJsonSerializerImpl$1__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 28).it_appify_api_Geoposition_timestamp);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonSerializerImpl/1', 190);
function it_appify_api_GeopositionBeanJsonSerializerImpl$2_GeopositionBeanJsonSerializerImpl$2__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_52);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(191, 4, $intern_16, it_appify_api_GeopositionBeanJsonSerializerImpl$2_GeopositionBeanJsonSerializerImpl$2__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 28).it_appify_api_Geoposition_coords;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'GeopositionBeanJsonSerializerImpl/2', 191);
function it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(50, 1, {50:1}, it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1HasViewHandlers$ViewHandlerHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'HasViewHandlers/ViewHandlerHolder', 50);
function it_appify_api_Screen_$setAvailHeight__Lit_appify_api_Screen_2IV(this$static, availHeight){
  this$static.it_appify_api_Screen_availHeight = availHeight;
}

function it_appify_api_Screen_$setAvailLeft__Lit_appify_api_Screen_2IV(this$static, availLeft){
  this$static.it_appify_api_Screen_availLeft = availLeft;
}

function it_appify_api_Screen_$setAvailTop__Lit_appify_api_Screen_2IV(this$static, availTop){
  this$static.it_appify_api_Screen_availTop = availTop;
}

function it_appify_api_Screen_$setAvailWidth__Lit_appify_api_Screen_2IV(this$static, availWidth){
  this$static.it_appify_api_Screen_availWidth = availWidth;
}

function it_appify_api_Screen_$setColorDepth__Lit_appify_api_Screen_2IV(this$static, colorDepth){
  this$static.it_appify_api_Screen_colorDepth = colorDepth;
}

function it_appify_api_Screen_Screen__V(){
  this.it_appify_api_Screen_availHeight = 0;
  this.it_appify_api_Screen_availWidth = 0;
  this.it_appify_api_Screen_availLeft = 0;
  this.it_appify_api_Screen_availTop = 0;
  this.it_appify_api_Screen_colorDepth = 0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(18, 1, {18:1, 3:1}, it_appify_api_Screen_Screen__V);
_.it_appify_api_Screen_availHeight = 0;
_.it_appify_api_Screen_availLeft = 0;
_.it_appify_api_Screen_availTop = 0;
_.it_appify_api_Screen_availWidth = 0;
_.it_appify_api_Screen_colorDepth = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Screen_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'Screen', 18);
function it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(205, 33, {}, it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Screen_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_53, new it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'availLeft', new it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'availTop', new it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_54, new it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_55, new it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl', 205);
function it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(206, 1, {}, it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Screen_Screen__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/1', 206);
function it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(207, 8, $intern_8, it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailHeight__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/2', 207);
function it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(208, 8, $intern_8, it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailLeft__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/3', 208);
function it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(209, 8, $intern_8, it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailTop__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/4', 209);
function it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(210, 8, $intern_8, it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailWidth__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/5', 210);
function it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(211, 8, $intern_8, it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setColorDepth__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 16).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonDeserializerImpl/6', 211);
function it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(225, 27, {}, it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Screen_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 5, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_ScreenBeanJsonSerializerImpl$1_ScreenBeanJsonSerializerImpl$1__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_ScreenBeanJsonSerializerImpl$2_ScreenBeanJsonSerializerImpl$2__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_api_ScreenBeanJsonSerializerImpl$3_ScreenBeanJsonSerializerImpl$3__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 3, new it_appify_api_ScreenBeanJsonSerializerImpl$4_ScreenBeanJsonSerializerImpl$4__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 4, new it_appify_api_ScreenBeanJsonSerializerImpl$5_ScreenBeanJsonSerializerImpl$5__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl', 225);
function it_appify_api_ScreenBeanJsonSerializerImpl$1_ScreenBeanJsonSerializerImpl$1__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_53);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(226, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$1_ScreenBeanJsonSerializerImpl$1__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18).it_appify_api_Screen_availHeight);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl/1', 226);
function it_appify_api_ScreenBeanJsonSerializerImpl$2_ScreenBeanJsonSerializerImpl$2__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'availLeft');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(227, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$2_ScreenBeanJsonSerializerImpl$2__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18).it_appify_api_Screen_availLeft);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl/2', 227);
function it_appify_api_ScreenBeanJsonSerializerImpl$3_ScreenBeanJsonSerializerImpl$3__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'availTop');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(228, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$3_ScreenBeanJsonSerializerImpl$3__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18).it_appify_api_Screen_availTop);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl/3', 228);
function it_appify_api_ScreenBeanJsonSerializerImpl$4_ScreenBeanJsonSerializerImpl$4__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_54);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(229, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$4_ScreenBeanJsonSerializerImpl$4__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18).it_appify_api_Screen_availWidth);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl/4', 229);
function it_appify_api_ScreenBeanJsonSerializerImpl$5_ScreenBeanJsonSerializerImpl$5__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_55);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(230, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$5_ScreenBeanJsonSerializerImpl$5__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 18).it_appify_api_Screen_colorDepth);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenBeanJsonSerializerImpl/5', 230);
function it_appify_api_ScreenOrientation_$setAngle__Lit_appify_api_ScreenOrientation_2DV(this$static, angle){
  this$static.it_appify_api_ScreenOrientation_angle = angle;
}

function it_appify_api_ScreenOrientation_$setFullscreen__Lit_appify_api_ScreenOrientation_2ZV(this$static, fullscreen){
  this$static.it_appify_api_ScreenOrientation_fullscreen = fullscreen;
}

function it_appify_api_ScreenOrientation_$setType__Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2V(this$static, type_0){
  this$static.it_appify_api_ScreenOrientation_type = type_0;
}

function it_appify_api_ScreenOrientation_ScreenOrientation__V(){
  this.it_appify_api_ScreenOrientation_angle = 0;
  this.it_appify_api_ScreenOrientation_type = 'any';
  this.it_appify_api_ScreenOrientation_fullscreen = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(22, 1, {22:1, 3:1}, it_appify_api_ScreenOrientation_ScreenOrientation__V);
_.it_appify_api_ScreenOrientation_angle = 0;
_.it_appify_api_ScreenOrientation_fullscreen = false;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientation', 22);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(212, 33, {}, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientation_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'angle', new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'type', new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_56, new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonDeserializerImpl', 212);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(213, 1, {}, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_ScreenOrientation_ScreenOrientation__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonDeserializerImpl/1', 213);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(214, 8, $intern_8, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientation_$setAngle__Lit_appify_api_ScreenOrientation_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 17).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonDeserializerImpl/2', 214);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_2Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_api_ScreenOrientation_type = value_0;
}

function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(215, 8, $intern_8, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_2Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonDeserializerImpl/3', 215);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(216, 8, $intern_8, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientation_$setFullscreen__Lit_appify_api_ScreenOrientation_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 24).java_lang_Boolean_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonDeserializerImpl/4', 216);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(231, 27, {}, it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientation_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 3, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_ScreenOrientationBeanJsonSerializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_ScreenOrientationBeanJsonSerializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_ScreenOrientationBeanJsonSerializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonSerializerImpl', 231);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_ScreenOrientationBeanJsonSerializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'angle');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(232, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_ScreenOrientationBeanJsonSerializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22).it_appify_api_ScreenOrientation_angle);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonSerializerImpl/1', 232);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_ScreenOrientationBeanJsonSerializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'type');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(233, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_ScreenOrientationBeanJsonSerializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22).it_appify_api_ScreenOrientation_type;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonSerializerImpl/2', 233);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_$getValue__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_ScreenOrientation_fullscreen?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_ScreenOrientationBeanJsonSerializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_56);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(234, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_ScreenOrientationBeanJsonSerializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_$getValue__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 22));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_44, 'ScreenOrientationBeanJsonSerializerImpl/3', 234);
function it_appify_app_AbstractWebApp_$back__Lit_appify_app_AbstractWebApp_2V(this$static){
  var pageId, state;
  pageId = com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_Stack_$pop__Ljava_util_Stack_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageStack));
  state = it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_modelView);
  it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static.it_appify_app_AbstractWebApp_loader, pageId, state, null);
}

function it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, pageId, holder){
  var holders;
  holders = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, pageId), 19);
  !holders && (holders = new java_util_ArrayList_ArrayList__V);
  holders.add__Ljava_lang_Object_2Z(holder);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, pageId, holders);
}

function it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, service){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.it_appify_app_AbstractWebApp_services, service);
}

function it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2(viewId, handler){
  var holder;
  holder = new it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V;
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_eventType = 'click';
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_handler = handler;
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_viewId = viewId;
  return holder;
}

function it_appify_app_AbstractWebApp_$moveTo__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2V(this$static){
  if (!it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager)) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Main page not started  maybe you need to call start app first??');
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager).it_appify_view_WebPage_pageElement.id, $intern_57)) {
    return;
  }
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2Z(this$static.it_appify_app_AbstractWebApp_pageStack, it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager).it_appify_view_WebPage_pageElement.id);
  it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static.it_appify_app_AbstractWebApp_loader, $intern_57, it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_modelView), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, $intern_57), 19));
}

function it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static, initialState){
  var handlers, it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceBatteryService_0, it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceGeolocationService_0, it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceScreenOrientationService_0, it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceStorageService_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerChildPageController_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holderchildPage_childPageBackBtn_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMainPageController_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_nextBtn_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMenuController_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_firstMenuBtn_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_showLeft_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_fullScreenBtn_0, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_exitfullScreenBtn_0;
  if (this$static.it_appify_app_AbstractWebApp_mainPage == null || !this$static.it_appify_app_AbstractWebApp_mainPage.length) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('main page cannot be null or empty');
  }
  if (!it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager)) {
    it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceBatteryService_0 = new it_appify_examples_client_service_BatteryService_BatteryService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_client_app_ExampleAppImpl$8_ExampleAppImpl$8__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceBatteryService_0));
    it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceGeolocationService_0 = new it_appify_examples_client_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_client_app_ExampleAppImpl$9_ExampleAppImpl$9__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceGeolocationService_0));
    it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceScreenOrientationService_0 = new it_appify_examples_client_service_ScreenOrientationService_ScreenOrientationService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_client_app_ExampleAppImpl$10_ExampleAppImpl$10__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceScreenOrientationService_0));
    it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceStorageService_0 = new it_appify_examples_client_service_StorageService_StorageService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_client_app_ExampleAppImpl$11_ExampleAppImpl$11__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeServices__Lit_appify_examples_client_app_ExampleAppImpl_2V_serviceStorageService_0));
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerChildPageController_0 = new it_appify_examples_client_controller_ChildPageController_ChildPageController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holderchildPage_childPageBackBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('childPageBackBtn', new it_appify_examples_client_app_ExampleAppImpl$2_ExampleAppImpl$2__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerChildPageController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_57, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holderchildPage_childPageBackBtn_0);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMainPageController_0 = new it_appify_examples_client_controller_MainPageController_MainPageController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_nextBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('nextBtn', new it_appify_examples_client_app_ExampleAppImpl$3_ExampleAppImpl$3__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMainPageController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_58, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_nextBtn_0);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMenuController_0 = new it_appify_examples_client_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_firstMenuBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('firstMenuBtn', new it_appify_examples_client_app_ExampleAppImpl$4_ExampleAppImpl$4__Lit_appify_examples_client_app_ExampleAppImpl_2V(it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_controllerMenuController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_58, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_firstMenuBtn_0);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_showLeft_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('showLeft', new it_appify_examples_client_app_ExampleAppImpl$5_ExampleAppImpl$5__Lit_appify_examples_client_app_ExampleAppImpl_2V);
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_58, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_showLeft_0);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_fullScreenBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('fullScreenBtn', new it_appify_examples_client_app_ExampleAppImpl$6_ExampleAppImpl$6__Lit_appify_examples_client_app_ExampleAppImpl_2V);
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_58, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_fullScreenBtn_0);
    it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_exitfullScreenBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('exitfullScreenBtn', new it_appify_examples_client_app_ExampleAppImpl$7_ExampleAppImpl$7__Lit_appify_examples_client_app_ExampleAppImpl_2V);
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_58, it_appify_examples_client_app_ExampleAppImpl_$initializeControllers__Lit_appify_examples_client_app_ExampleAppImpl_2V_holdermainPage_exitfullScreenBtn_0);
    handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, this$static.it_appify_app_AbstractWebApp_mainPage), 19);
    it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static.it_appify_app_AbstractWebApp_loader, this$static.it_appify_app_AbstractWebApp_mainPage, initialState, handlers);
    java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2Z(this$static.it_appify_app_AbstractWebApp_pageStack, this$static.it_appify_app_AbstractWebApp_mainPage);
  }
   else {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('App just started use moveTo and back to create navigation in your app');
  }
}

function it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2Lit_appify_app_WebApp$AppListener_2V(this$static, initialAppState, callback){
  this$static.it_appify_app_AbstractWebApp_callback = callback;
  it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static, initialAppState);
}

function it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static, state){
  it_appify_view_VueJsViewModel_$updateModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2V(this$static.it_appify_app_AbstractWebApp_modelView, state);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(89, 1, {});
_.it_appify_app_AbstractWebApp_firstLoad = true;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1app_1AbstractWebApp_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'AbstractWebApp', 89);
function it_appify_app_AbstractWebApp$1_$onPageReady__Lit_appify_app_AbstractWebApp$1_2Lit_appify_api_Page_2V(this$static, page){
  var s, s$iterator;
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(page.it_appify_view_WebPage_pageElement.id, this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_mainPage) && this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_firstLoad) {
    this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_firstLoad = false;
    if (this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_callback) {
      if (!!this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services && this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services.java_util_ArrayList_array.length > 0) {
        for (s$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services); s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
          s = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_last = s$iterator.java_util_AbstractList$IteratorImpl_i++), 69));
          s.start__V();
        }
      }
      com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_callback.it_appify_examples_client_AppifyEntryPoint$1_val$myApp2.it_appify_app_AbstractWebApp_modelView), 10);
    }
  }
}

function it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V(this$0){
  this.it_appify_app_AbstractWebApp$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(104, 1, {}, it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1app_1AbstractWebApp$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'AbstractWebApp/1', 104);
function it_appify_app_ServiceProvider_createGeoLocationService__ZIJLit_appify_api_Geolocation_2(){
  var options;
  if (!it_appify_app_ServiceProvider_geolocation) {
    options = new it_appify_api_GeoOptions_GeoOptions__V;
    options.it_appify_api_GeoOptions_enableHighAccuracy = true;
    options.it_appify_api_GeoOptions_maximumAge = {l:5000, m:0, h:0};
    options.it_appify_api_GeoOptions_timeout = {l:5000, m:0, h:0};
    it_appify_app_ServiceProvider_geolocation = new it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V(options);
  }
  return it_appify_app_ServiceProvider_geolocation;
}

var it_appify_app_ServiceProvider_battery, it_appify_app_ServiceProvider_geolocation, it_appify_app_ServiceProvider_webScreenOrientation;
function it_appify_battery_AdvancedJSBattery_$getBatteryStatus__Lit_appify_battery_AdvancedJSBattery_2Lit_appify_api_Battery$BatteryStatusCallback_2V(this$static, callback){
  it_appify_battery_BatteryJsObject_$_1getBatteryInfo__Lit_appify_battery_BatteryJsObject_2Lit_appify_battery_BatteryJsObject$BatteryCallback_2D(this$static.it_appify_battery_AdvancedJSBattery_batteryObj, new it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V(callback));
}

function it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V(){
  this.it_appify_battery_AdvancedJSBattery_batteryObj = new it_appify_battery_BatteryJsObject_BatteryJsObject__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(175, 1, {}, it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1AdvancedJSBattery_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'AdvancedJSBattery', 175);
function it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V(val$callback){
  this.it_appify_battery_AdvancedJSBattery$1_val$callback2 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(176, 1, {}, it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V);
_.onBatteryInfo__DZV = function it_appify_battery_AdvancedJSBattery$1_onBatteryInfo__DZV(level, charging){
  var status_0;
  status_0 = new it_appify_api_BatteryStatus_BatteryStatus__V;
  status_0.it_appify_api_BatteryStatus_charging = charging;
  status_0.it_appify_api_BatteryStatus_level = level;
  it_appify_examples_client_service_BatteryService$1_$onBatteryStatus__Lit_appify_examples_client_service_BatteryService$1_2Lit_appify_api_BatteryStatus_2V(this.it_appify_battery_AdvancedJSBattery$1_val$callback2, status_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1AdvancedJSBattery$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'AdvancedJSBattery/1', 176);
function it_appify_battery_BatteryJsObject_$_1getBatteryInfo__Lit_appify_battery_BatteryJsObject_2Lit_appify_battery_BatteryJsObject$BatteryCallback_2D(this$static, callback){
  var that = this$static;
  navigator.getBattery().then(function(battery){
    var level = battery.level;
    var charging = battery.charging;
    callback.onBatteryInfo__DZV(level, charging);
  }
  );
}

function it_appify_battery_BatteryJsObject_BatteryJsObject__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(177, 1, {}, it_appify_battery_BatteryJsObject_BatteryJsObject__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1BatteryJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'BatteryJsObject', 177);
function it_appify_examples_client_AppifyEntryPoint$1_AppifyEntryPoint$1__Lit_appify_examples_client_AppifyEntryPoint_2V(val$myApp){
  this.it_appify_examples_client_AppifyEntryPoint$1_val$myApp2 = val$myApp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(81, 1, {}, it_appify_examples_client_AppifyEntryPoint$1_AppifyEntryPoint$1__Lit_appify_examples_client_AppifyEntryPoint_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1AppifyEntryPoint$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('it.appify.examples.client', 'AppifyEntryPoint/1', 81);
function it_appify_examples_client_app_ExampleAppImpl_ExampleAppImpl__V(){
  this.it_appify_app_AbstractWebApp_pl = new it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V(this);
  this.it_appify_app_AbstractWebApp_mainPage = $intern_58;
  this.it_appify_app_AbstractWebApp_services = new java_util_ArrayList_ArrayList__V;
  this.it_appify_app_AbstractWebApp_pageViewHandlers = new java_util_HashMap_HashMap__V;
  this.it_appify_app_AbstractWebApp_pageStack = new java_util_Stack_Stack__V;
  this.it_appify_app_AbstractWebApp_pageManager = new it_appify_view_AppJsPageManager_AppJsPageManager__V;
  $wnd.App.setDefaultTransition('slide-left');
  this.it_appify_app_AbstractWebApp_modelView = new it_appify_examples_client_app_ExampleAppImpl$1_ExampleAppImpl$1__Lit_appify_examples_client_app_ExampleAppImpl_2V;
  this.it_appify_app_AbstractWebApp_loader = new it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V(this.it_appify_app_AbstractWebApp_pageManager, this.it_appify_app_AbstractWebApp_modelView, this.it_appify_app_AbstractWebApp_pl);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(90, 89, {}, it_appify_examples_client_app_ExampleAppImpl_ExampleAppImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl', 90);
function it_appify_view_VueJsViewModel_$bindModelToView__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, viewId, instance){
  var jsObj, json;
  this$static.it_appify_view_VueJsViewModel_model = instance;
  json = (!this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper, instance, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  $wnd.vm = new $wnd.Vue({el:'#' + viewId, data:jsObj});
  $wnd.vm;
}

function it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static){
  var dummyM, it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0, it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0;
  if (this$static.it_appify_view_VueJsViewModel_model == null) {
    dummyM = (!this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper, '{}', com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)));
    return dummyM;
  }
  this$static.it_appify_view_VueJsViewModel_model = (it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0 = $wnd.vm.$data , it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0 = new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0) , !this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper, com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0), com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)));
  return this$static.it_appify_view_VueJsViewModel_model;
}

function it_appify_view_VueJsViewModel_$updateModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2V(this$static, model){
  var jsObj, json;
  json = (!this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_client_app_ExampleAppImpl$1_mapper, model, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  $wnd.vm.$data = jsObj;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(276, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1VueJsViewModel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'VueJsViewModel', 276);
function it_appify_examples_client_app_ExampleAppImpl$1_ExampleAppImpl$1__Lit_appify_examples_client_app_ExampleAppImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(91, 276, {}, it_appify_examples_client_app_ExampleAppImpl$1_ExampleAppImpl$1__Lit_appify_examples_client_app_ExampleAppImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/1', 91);
function it_appify_examples_client_app_ExampleAppImpl$10_ExampleAppImpl$10__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$serviceScreenOrientationService){
  this.it_appify_examples_client_app_ExampleAppImpl$10_val$serviceScreenOrientationService2 = val$serviceScreenOrientationService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(100, 1, $intern_63, it_appify_examples_client_app_ExampleAppImpl$10_ExampleAppImpl$10__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.start__V = function it_appify_examples_client_app_ExampleAppImpl$10_start__V(){
  it_appify_examples_client_service_ScreenOrientationService_$start__Lit_appify_examples_client_service_ScreenOrientationService_2V(this.it_appify_examples_client_app_ExampleAppImpl$10_val$serviceScreenOrientationService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/10', 100);
function it_appify_examples_client_app_ExampleAppImpl$11_ExampleAppImpl$11__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$serviceStorageService){
  this.it_appify_examples_client_app_ExampleAppImpl$11_val$serviceStorageService2 = val$serviceStorageService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(101, 1, $intern_63, it_appify_examples_client_app_ExampleAppImpl$11_ExampleAppImpl$11__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.start__V = function it_appify_examples_client_app_ExampleAppImpl$11_start__V(){
  it_appify_examples_client_service_StorageService_$start__Lit_appify_examples_client_service_StorageService_2V(this.it_appify_examples_client_app_ExampleAppImpl$11_val$serviceStorageService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/11', 101);
function it_appify_storage_AbstractStorage_$get__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var data_0, model;
  data_0 = com_google_gwt_storage_client_Storage_$getItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2(this$static.it_appify_storage_AbstractStorage_storage, key);
  if (data_0 == null) {
    return null;
  }
  model = (!this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper, data_0, com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)));
  return model;
}

function it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, model){
  var data_0;
  data_0 = (!this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper && (this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper = new it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_client_app_ExampleAppImpl$12_mapper, model, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  com_google_gwt_storage_client_Storage_$setItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.it_appify_storage_AbstractStorage_storage, key, data_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(102, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1storage_1AbstractStorage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_64, 'AbstractStorage', 102);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(103, 102, {});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1storage_1LocalStorage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_64, 'LocalStorage', 103);
function it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V(){
  this.it_appify_storage_AbstractStorage_storage = (!com_google_gwt_storage_client_Storage_localStorage && (com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V() , com_google_gwt_storage_client_Storage$StorageSupportDetector_localStorageSupported) && (com_google_gwt_storage_client_Storage_localStorage = new com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V) , com_google_gwt_storage_client_Storage_localStorage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(45, 103, {}, it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$12_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/12', 45);
function it_appify_examples_client_app_ExampleAppImpl$2_ExampleAppImpl$2__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$controllerChildPageController){
  this.it_appify_examples_client_app_ExampleAppImpl$2_val$controllerChildPageController2 = val$controllerChildPageController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(92, 1, {}, it_appify_examples_client_app_ExampleAppImpl$2_ExampleAppImpl$2__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$2_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_app_AbstractWebApp_$back__Lit_appify_app_AbstractWebApp_2V(this.it_appify_examples_client_app_ExampleAppImpl$2_val$controllerChildPageController2.it_appify_examples_client_controller_ChildPageController_app);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/2', 92);
function it_appify_examples_client_app_ExampleAppImpl$3_ExampleAppImpl$3__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$controllerMainPageController){
  this.it_appify_examples_client_app_ExampleAppImpl$3_val$controllerMainPageController2 = val$controllerMainPageController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(93, 1, {}, it_appify_examples_client_app_ExampleAppImpl$3_ExampleAppImpl$3__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$3_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_app_AbstractWebApp_$moveTo__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2V(this.it_appify_examples_client_app_ExampleAppImpl$3_val$controllerMainPageController2.it_appify_examples_client_controller_MainPageController_app);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/3', 93);
function it_appify_examples_client_app_ExampleAppImpl$4_ExampleAppImpl$4__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$controllerMenuController){
  this.it_appify_examples_client_app_ExampleAppImpl$4_val$controllerMenuController2 = val$controllerMenuController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(94, 1, {}, it_appify_examples_client_app_ExampleAppImpl$4_ExampleAppImpl$4__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$4_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_app_AbstractWebApp_$moveTo__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2V(this.it_appify_examples_client_app_ExampleAppImpl$4_val$controllerMenuController2.it_appify_examples_client_controller_MenuController_app);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/4', 94);
function it_appify_examples_client_app_ExampleAppImpl$5_ExampleAppImpl$5__Lit_appify_examples_client_app_ExampleAppImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(95, 1, {}, it_appify_examples_client_app_ExampleAppImpl$5_ExampleAppImpl$5__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$5_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  var it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_pushable_0, it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_menuLeft_0;
  it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_menuLeft_0 = $doc.getElementById('cbp-spmenu-s1');
  it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_pushable_0 = $doc.getElementById('pushableContent');
  $wnd.classie.toggle(it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_pushable_0, 'cbp-spmenu-push-toright');
  $wnd.classie.toggle(it_appify_examples_client_controller_MenuController_$showMenu__Lit_appify_examples_client_controller_MenuController_2V_menuLeft_0, 'cbp-spmenu-open');
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/5', 95);
function it_appify_examples_client_app_ExampleAppImpl$6_ExampleAppImpl$6__Lit_appify_examples_client_app_ExampleAppImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(96, 1, {}, it_appify_examples_client_app_ExampleAppImpl$6_ExampleAppImpl$6__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$6_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  !it_appify_app_ServiceProvider_webScreenOrientation && (it_appify_app_ServiceProvider_webScreenOrientation = new it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V);
  console.log('_requestFullScreen: ');
  $wnd.Fullscreen.launch($doc.documentElement);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/6', 96);
function it_appify_examples_client_app_ExampleAppImpl$7_ExampleAppImpl$7__Lit_appify_examples_client_app_ExampleAppImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(97, 1, {}, it_appify_examples_client_app_ExampleAppImpl$7_ExampleAppImpl$7__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_client_app_ExampleAppImpl$7_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  !it_appify_app_ServiceProvider_webScreenOrientation && (it_appify_app_ServiceProvider_webScreenOrientation = new it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V);
  $wnd.Fullscreen.exit();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/7', 97);
function it_appify_examples_client_app_ExampleAppImpl$8_ExampleAppImpl$8__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$serviceBatteryService){
  this.it_appify_examples_client_app_ExampleAppImpl$8_val$serviceBatteryService2 = val$serviceBatteryService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(98, 1, $intern_63, it_appify_examples_client_app_ExampleAppImpl$8_ExampleAppImpl$8__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.start__V = function it_appify_examples_client_app_ExampleAppImpl$8_start__V(){
  it_appify_examples_client_service_BatteryService_$startService__Lit_appify_examples_client_service_BatteryService_2V(this.it_appify_examples_client_app_ExampleAppImpl$8_val$serviceBatteryService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/8', 98);
function it_appify_examples_client_app_ExampleAppImpl$9_ExampleAppImpl$9__Lit_appify_examples_client_app_ExampleAppImpl_2V(val$serviceGeolocationService){
  this.it_appify_examples_client_app_ExampleAppImpl$9_val$serviceGeolocationService2 = val$serviceGeolocationService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(99, 1, $intern_63, it_appify_examples_client_app_ExampleAppImpl$9_ExampleAppImpl$9__Lit_appify_examples_client_app_ExampleAppImpl_2V);
_.start__V = function it_appify_examples_client_app_ExampleAppImpl$9_start__V(){
  it_appify_examples_client_service_GeolocationService_$start__Lit_appify_examples_client_service_GeolocationService_2V(this.it_appify_examples_client_app_ExampleAppImpl$9_val$serviceGeolocationService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl/9', 99);
function it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, 'AppModel');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(42, 63, {}, it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_ExampleAppImpl_1ObjectMapperAppModelImpl__V);
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_app_ExampleAppImpl_1ObjectMapperAppModelImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl_AppModelBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1app_1ExampleAppImpl_11ObjectMapperAppModelImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ExampleAppImpl_ObjectMapperAppModelImpl', 42);
function it_appify_examples_client_controller_ChildPageController_ChildPageController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_client_controller_ChildPageController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(136, 1, {}, it_appify_examples_client_controller_ChildPageController_ChildPageController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1controller_1ChildPageController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_65, 'ChildPageController', 136);
function it_appify_examples_client_controller_MainPageController_MainPageController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_client_controller_MainPageController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(137, 1, {}, it_appify_examples_client_controller_MainPageController_MainPageController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1controller_1MainPageController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_65, 'MainPageController', 137);
function it_appify_examples_client_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_client_controller_MenuController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(138, 1, {}, it_appify_examples_client_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1controller_1MenuController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_65, 'MenuController', 138);
function it_appify_examples_client_model_AppModel_$setBatteryStatus__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_BatteryStatus_2V(this$static, batteryStatus){
  this$static.it_appify_examples_client_model_AppModel_batteryStatus = batteryStatus;
}

function it_appify_examples_client_model_AppModel_$setScreen__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Screen_2V(this$static, screen_0){
  this$static.it_appify_examples_client_model_AppModel_screen = screen_0;
}

function it_appify_examples_client_model_AppModel_$setScreenOrientation__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_ScreenOrientation_2V(this$static, screenOrientation){
  this$static.it_appify_examples_client_model_AppModel_screenOrientation = screenOrientation;
}

function it_appify_examples_client_model_AppModel_AppModel__V(){
}

function it_appify_examples_client_model_AppModel_AppModel__Ljava_lang_String_2V(){
  this.it_appify_examples_client_model_AppModel_title = 'Appify Examples';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(10, 1, {10:1, 3:1}, it_appify_examples_client_model_AppModel_AppModel__V, it_appify_examples_client_model_AppModel_AppModel__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModel', 10);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_AppModelBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(77, 33, {}, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_AppModelBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_67, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_AppModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_68, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_AppModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'input', new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_AppModelBeanJsonDeserializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_69, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_AppModelBeanJsonDeserializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_70, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_AppModelBeanJsonDeserializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'message', new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_AppModelBeanJsonDeserializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'child', new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_AppModelBeanJsonDeserializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_71, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_AppModelBeanJsonDeserializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'position', new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_AppModelBeanJsonDeserializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'screen', new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_AppModelBeanJsonDeserializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_72, new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_AppModelBeanJsonDeserializerImpl$12__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$1_AppModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl', 77);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$1_AppModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(151, 1, {}, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$1_AppModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_examples_client_model_AppModel_AppModel__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/1', 151);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Geoposition_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_position = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_AppModelBeanJsonDeserializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(160, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_AppModelBeanJsonDeserializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$10_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Geoposition_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 28));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/10', 160);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Screen_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_screen = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_AppModelBeanJsonDeserializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(161, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_AppModelBeanJsonDeserializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$11_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Screen_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/11', 161);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_screenOrientation = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_AppModelBeanJsonDeserializerImpl$12__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(162, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_AppModelBeanJsonDeserializerImpl$12__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$12_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 22));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$12_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/12', 162);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_title = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_AppModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(152, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_AppModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/2', 152);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_content = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_AppModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(153, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_AppModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/3', 153);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_input = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_AppModelBeanJsonDeserializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(154, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_AppModelBeanJsonDeserializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$4_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/4', 154);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_chilePageTitle = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_AppModelBeanJsonDeserializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(155, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_AppModelBeanJsonDeserializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$5_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/5', 155);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_childPageContent = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_AppModelBeanJsonDeserializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(156, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_AppModelBeanJsonDeserializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$6_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/6', 156);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_message = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_AppModelBeanJsonDeserializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(157, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_AppModelBeanJsonDeserializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$7_2Lit_appify_examples_client_model_AppModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/7', 157);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_2Lit_appify_examples_client_model_AppModel_2Lit_appify_examples_client_model_ChildModel_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_child = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_AppModelBeanJsonDeserializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(158, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_AppModelBeanJsonDeserializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_ChildModelBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$8_2Lit_appify_examples_client_model_AppModel_2Lit_appify_examples_client_model_ChildModel_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 26));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/8', 158);
function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_AppModel_batteryStatus = value_0;
}

function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_AppModelBeanJsonDeserializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(159, 8, $intern_8, it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_AppModelBeanJsonDeserializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_$setValue__Lit_appify_examples_client_model_AppModelBeanJsonDeserializerImpl$9_2Lit_appify_examples_client_model_AppModel_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 29));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonDeserializerImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonDeserializerImpl/9', 159);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl_AppModelBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(163, 27, {}, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl_AppModelBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 11, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$1_AppModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$2_AppModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$3_AppModelBeanJsonSerializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 3, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$4_AppModelBeanJsonSerializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 4, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$5_AppModelBeanJsonSerializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 5, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$6_AppModelBeanJsonSerializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 6, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$7_AppModelBeanJsonSerializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 7, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$8_AppModelBeanJsonSerializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 8, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$9_AppModelBeanJsonSerializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 9, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$10_AppModelBeanJsonSerializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 10, new it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$11_AppModelBeanJsonSerializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl', 163);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$1_AppModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_67);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(164, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$1_AppModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_title;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/1', 164);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$10_AppModelBeanJsonSerializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'screen');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(173, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$10_AppModelBeanJsonSerializerImpl$10__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$10_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_screen;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$10_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/10', 173);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$11_AppModelBeanJsonSerializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_72);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(174, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$11_AppModelBeanJsonSerializerImpl$11__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$11_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_screenOrientation;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$11_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/11', 174);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$2_AppModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_68);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(165, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$2_AppModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_content;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/2', 165);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$3_AppModelBeanJsonSerializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'input');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(166, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$3_AppModelBeanJsonSerializerImpl$3__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_input;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/3', 166);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$4_AppModelBeanJsonSerializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_69);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(167, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$4_AppModelBeanJsonSerializerImpl$4__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_chilePageTitle;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/4', 167);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$5_AppModelBeanJsonSerializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_70);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(168, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$5_AppModelBeanJsonSerializerImpl$5__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_childPageContent;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/5', 168);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$6_AppModelBeanJsonSerializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'message');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(169, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$6_AppModelBeanJsonSerializerImpl$6__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$6_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_message;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$6_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/6', 169);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$7_AppModelBeanJsonSerializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'child');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(170, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$7_AppModelBeanJsonSerializerImpl$7__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$7_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_child;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$7_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_ChildModelBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/7', 170);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$8_AppModelBeanJsonSerializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_71);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(171, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$8_AppModelBeanJsonSerializerImpl$8__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$8_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_batteryStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$8_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/8', 171);
function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$9_AppModelBeanJsonSerializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'position');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(172, 4, $intern_16, it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$9_AppModelBeanJsonSerializerImpl$9__Lit_appify_examples_client_model_AppModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$9_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 10).it_appify_examples_client_model_AppModel_position;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_AppModelBeanJsonSerializerImpl$9_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModelBeanJsonSerializerImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AppModelBeanJsonSerializerImpl/9', 172);
function it_appify_examples_client_model_ChildModel_ChildModel__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(26, 1, {26:1, 3:1}, it_appify_examples_client_model_ChildModel_ChildModel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModel', 26);
function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_ChildModelBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(197, 33, {}, it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_ChildModelBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModel_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_67, new it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_ChildModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_68, new it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_ChildModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$1_ChildModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonDeserializerImpl', 197);
function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$1_ChildModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(198, 1, {}, it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$1_ChildModelBeanJsonDeserializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_examples_client_model_ChildModel_ChildModel__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonDeserializerImpl/1', 198);
function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_client_model_ChildModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_ChildModel_title = value_0;
}

function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_ChildModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(199, 8, $intern_8, it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_ChildModelBeanJsonDeserializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_client_model_ChildModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 26), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonDeserializerImpl/2', 199);
function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_client_model_ChildModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_client_model_ChildModel_content = value_0;
}

function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_ChildModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(200, 8, $intern_8, it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_ChildModelBeanJsonDeserializerImpl$3__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_client_model_ChildModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_client_model_ChildModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 26), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonDeserializerImpl/3', 200);
function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_ChildModelBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(219, 27, {}, it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_ChildModelBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModel_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 2, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$1_ChildModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$2_ChildModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonSerializerImpl', 219);
function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$1_ChildModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_67);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(220, 4, $intern_16, it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$1_ChildModelBeanJsonSerializerImpl$1__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 26).it_appify_examples_client_model_ChildModel_title;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonSerializerImpl/1', 220);
function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$2_ChildModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_68);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(221, 4, $intern_16, it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$2_ChildModelBeanJsonSerializerImpl$2__Lit_appify_examples_client_model_ChildModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 26).it_appify_examples_client_model_ChildModel_content;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_client_model_ChildModelBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1ChildModelBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ChildModelBeanJsonSerializerImpl/2', 221);
function it_appify_examples_client_service_BatteryService_$startService__Lit_appify_examples_client_service_BatteryService_2V(this$static){
  it_appify_battery_AdvancedJSBattery_$getBatteryStatus__Lit_appify_battery_AdvancedJSBattery_2Lit_appify_api_Battery$BatteryStatusCallback_2V((!it_appify_app_ServiceProvider_battery && (it_appify_app_ServiceProvider_battery = new it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V) , it_appify_app_ServiceProvider_battery), new it_appify_examples_client_service_BatteryService$1_BatteryService$1__Lit_appify_examples_client_service_BatteryService_2V(this$static));
}

function it_appify_examples_client_service_BatteryService_BatteryService__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_client_service_BatteryService_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(128, 1, {}, it_appify_examples_client_service_BatteryService_BatteryService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1BatteryService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'BatteryService', 128);
function it_appify_examples_client_service_BatteryService$1_$onBatteryStatus__Lit_appify_examples_client_service_BatteryService$1_2Lit_appify_api_BatteryStatus_2V(this$static, currentStatus){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), new it_appify_examples_client_service_BatteryService$1$1_BatteryService$1$1__Lit_appify_examples_client_service_BatteryService$1_2V(this$static, currentStatus));
}

function it_appify_examples_client_service_BatteryService$1_BatteryService$1__Lit_appify_examples_client_service_BatteryService_2V(this$0){
  this.it_appify_examples_client_service_BatteryService$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(129, 1, {}, it_appify_examples_client_service_BatteryService$1_BatteryService$1__Lit_appify_examples_client_service_BatteryService_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1BatteryService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'BatteryService/1', 129);
function it_appify_examples_client_service_BatteryService$1$1_BatteryService$1$1__Lit_appify_examples_client_service_BatteryService$1_2V(this$1, val$currentStatus){
  this.it_appify_examples_client_service_BatteryService$1$1_this$11 = this$1;
  this.it_appify_examples_client_service_BatteryService$1$1_val$currentStatus2 = val$currentStatus;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(130, 1, {}, it_appify_examples_client_service_BatteryService$1$1_BatteryService$1$1__Lit_appify_examples_client_service_BatteryService$1_2V);
_.execute__V = function it_appify_examples_client_service_BatteryService$1$1_execute__V(){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this.it_appify_examples_client_service_BatteryService$1$1_this$11.it_appify_examples_client_service_BatteryService$1_this$01.it_appify_examples_client_service_BatteryService_app.it_appify_app_AbstractWebApp_modelView), 10);
  it_appify_examples_client_model_AppModel_$setBatteryStatus__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_BatteryStatus_2V(model, this.it_appify_examples_client_service_BatteryService$1$1_val$currentStatus2);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this.it_appify_examples_client_service_BatteryService$1$1_this$11.it_appify_examples_client_service_BatteryService$1_this$01.it_appify_examples_client_service_BatteryService_app, model);
  it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(new it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V, ((com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 2) != 0?$intern_1:(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_typeName), model);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1BatteryService$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'BatteryService/1/1', 130);
function it_appify_examples_client_service_GeolocationService_$start__Lit_appify_examples_client_service_GeolocationService_2V(this$static){
  it_appify_geolocation_HTML5Geolocation_$watchPosition__Lit_appify_geolocation_HTML5Geolocation_2Lit_appify_api_Geolocation$GeolocationCallback_2V(it_appify_app_ServiceProvider_createGeoLocationService__ZIJLit_appify_api_Geolocation_2(), new it_appify_examples_client_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_client_service_GeolocationService_2V(this$static));
}

function it_appify_examples_client_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V(webapp){
  this.it_appify_examples_client_service_GeolocationService_webapp = webapp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(131, 1, {}, it_appify_examples_client_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1GeolocationService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'GeolocationService', 131);
function it_appify_examples_client_service_GeolocationService$1_$onPosition__Lit_appify_examples_client_service_GeolocationService$1_2Lit_appify_api_Geoposition_2V(this$static, position){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_client_service_GeolocationService$1_this$01.it_appify_examples_client_service_GeolocationService_webapp.it_appify_app_AbstractWebApp_modelView), 10);
  model.it_appify_examples_client_model_AppModel_position = position;
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_client_service_GeolocationService$1_this$01.it_appify_examples_client_service_GeolocationService_webapp, model);
  it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(new it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V, ((com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 2) != 0?$intern_1:(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_typeName), model);
}

function it_appify_examples_client_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_client_service_GeolocationService_2V(this$0){
  this.it_appify_examples_client_service_GeolocationService$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(132, 1, {}, it_appify_examples_client_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_client_service_GeolocationService_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1GeolocationService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'GeolocationService/1', 132);
function it_appify_examples_client_service_ScreenOrientationService_$start__Lit_appify_examples_client_service_ScreenOrientationService_2V(this$static){
  var model, screen_0, screenOrientation;
  screen_0 = it_appify_screenorientation_ScreenOrientationJsObject_$getScreenDetails__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lit_appify_api_Screen_2(!it_appify_app_ServiceProvider_webScreenOrientation && (it_appify_app_ServiceProvider_webScreenOrientation = new it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V));
  screenOrientation = it_appify_screenorientation_ScreenOrientationJsObject_$getScreenOrientationDetails__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lit_appify_api_ScreenOrientation_2(!it_appify_app_ServiceProvider_webScreenOrientation && (it_appify_app_ServiceProvider_webScreenOrientation = new it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V));
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_client_service_ScreenOrientationService_webapp.it_appify_app_AbstractWebApp_modelView), 10);
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), new it_appify_examples_client_service_ScreenOrientationService$1_ScreenOrientationService$1__Lit_appify_examples_client_service_ScreenOrientationService_2V(this$static, screen_0, model, screenOrientation));
}

function it_appify_examples_client_service_ScreenOrientationService_ScreenOrientationService__Lit_appify_app_WebApp_2V(webapp){
  this.it_appify_examples_client_service_ScreenOrientationService_webapp = webapp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(133, 1, {}, it_appify_examples_client_service_ScreenOrientationService_ScreenOrientationService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1ScreenOrientationService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'ScreenOrientationService', 133);
function it_appify_examples_client_service_ScreenOrientationService$1_ScreenOrientationService$1__Lit_appify_examples_client_service_ScreenOrientationService_2V(this$0, val$screen, val$model, val$screenOrientation){
  this.it_appify_examples_client_service_ScreenOrientationService$1_this$01 = this$0;
  this.it_appify_examples_client_service_ScreenOrientationService$1_val$screen2 = val$screen;
  this.it_appify_examples_client_service_ScreenOrientationService$1_val$model3 = val$model;
  this.it_appify_examples_client_service_ScreenOrientationService$1_val$screenOrientation4 = val$screenOrientation;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(134, 1, {}, it_appify_examples_client_service_ScreenOrientationService$1_ScreenOrientationService$1__Lit_appify_examples_client_service_ScreenOrientationService_2V);
_.execute__V = function it_appify_examples_client_service_ScreenOrientationService$1_execute__V(){
  it_appify_examples_client_model_AppModel_$setScreen__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_Screen_2V(this.it_appify_examples_client_service_ScreenOrientationService$1_val$model3, this.it_appify_examples_client_service_ScreenOrientationService$1_val$screen2);
  it_appify_examples_client_model_AppModel_$setScreenOrientation__Lit_appify_examples_client_model_AppModel_2Lit_appify_api_ScreenOrientation_2V(this.it_appify_examples_client_service_ScreenOrientationService$1_val$model3, this.it_appify_examples_client_service_ScreenOrientationService$1_val$screenOrientation4);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this.it_appify_examples_client_service_ScreenOrientationService$1_this$01.it_appify_examples_client_service_ScreenOrientationService_webapp, this.it_appify_examples_client_service_ScreenOrientationService$1_val$model3);
  it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(new it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V, ((com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 2) != 0?$intern_1:(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_typeName), this.it_appify_examples_client_service_ScreenOrientationService$1_val$model3);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1ScreenOrientationService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'ScreenOrientationService/1', 134);
function it_appify_examples_client_service_StorageService_$start__Lit_appify_examples_client_service_StorageService_2V(this$static){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_client_service_StorageService_webapp.it_appify_app_AbstractWebApp_modelView), 10);
  it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(new it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V, ((com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 2) != 0?$intern_1:(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_typeName), model);
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_storage_AbstractStorage_$get__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2(new it_appify_examples_client_app_ExampleAppImpl$12_ExampleAppImpl$12__Lit_appify_examples_client_app_ExampleAppImpl_2V, ((com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 2) != 0?$intern_1:(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_modifiers & 1) != 0?'':$intern_2) + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1model_1AppModel_12_1classLit.java_lang_Class_typeName)), 10);
}

function it_appify_examples_client_service_StorageService_StorageService__Lit_appify_app_WebApp_2V(webapp){
  this.it_appify_examples_client_service_StorageService_webapp = webapp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(135, 1, {}, it_appify_examples_client_service_StorageService_StorageService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1client_1service_1StorageService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_73, 'StorageService', 135);
function it_appify_geolocation_GeolocationJsObject_$_1watchPosition__Lit_appify_geolocation_GeolocationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static, options){
  console.log(' _watchPosition');
  var that = this$static;
  return $wnd.navigator.geolocation.watchPosition(function(position){
    that.onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V(position);
  }
  , function(error){
    that.onPositionError__ILjava_lang_String_2V(error.code, error.message);
  }
  , options);
}

function it_appify_geolocation_GeolocationJsObject_$watchPosition__Lit_appify_geolocation_GeolocationJsObject_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static, callback){
  var geoOpt, json;
  this$static.it_appify_geolocation_GeolocationJsObject_callback = callback;
  geoOpt = null;
  if (this$static.it_appify_geolocation_GeolocationJsObject_options) {
    json = com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_geolocation_GeolocationJsObject_optionsMapper, this$static.it_appify_geolocation_GeolocationJsObject_options, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V));
    geoOpt = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  }
  this$static.it_appify_geolocation_GeolocationJsObject_watchId < 0 && (this$static.it_appify_geolocation_GeolocationJsObject_watchId = it_appify_geolocation_GeolocationJsObject_$_1watchPosition__Lit_appify_geolocation_GeolocationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static, geoOpt));
}

function it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V(options){
  new it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V;
  this.it_appify_geolocation_GeolocationJsObject_optionsMapper = new it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V;
  this.it_appify_geolocation_GeolocationJsObject_options = options;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(178, 1, {}, it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V);
_.onPositionError__ILjava_lang_String_2V = function it_appify_geolocation_GeolocationJsObject_onPositionError__ILjava_lang_String_2V(errorCode, msg){
  this.it_appify_geolocation_GeolocationJsObject_callback = null;
}
;
_.onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_geolocation_GeolocationJsObject_onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V(position){
  var accuracy, coords, jsObj, latitude, longitude, obj, positionObj, positionString, timestamp;
  positionString = JSON.stringify(position);
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(positionString);
  obj = new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsObj);
  timestamp = java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ('' + com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_51).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value);
  latitude = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_52).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_47).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  longitude = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_52).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_48).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  accuracy = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_52).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_45).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  positionObj = new it_appify_api_Geoposition_Geoposition__V;
  positionObj.it_appify_api_Geoposition_timestamp = timestamp;
  coords = new it_appify_api_Coordinates_Coordinates__V;
  coords.it_appify_api_Coordinates_latitude = latitude;
  coords.it_appify_api_Coordinates_longitude = longitude;
  it_appify_api_Coordinates_$setAccuracy__Lit_appify_api_Coordinates_2IV(coords, com_google_gwt_lang_Cast_round_1int__DI(accuracy));
  positionObj.it_appify_api_Geoposition_coords = coords;
  !!this.it_appify_geolocation_GeolocationJsObject_callback && it_appify_examples_client_service_GeolocationService$1_$onPosition__Lit_appify_examples_client_service_GeolocationService$1_2Lit_appify_api_Geoposition_2V(this.it_appify_geolocation_GeolocationJsObject_callback, positionObj);
  this.it_appify_geolocation_GeolocationJsObject_watchId < 0 && (this.it_appify_geolocation_GeolocationJsObject_callback = null);
}
;
_.it_appify_geolocation_GeolocationJsObject_watchId = -1;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'GeolocationJsObject', 178);
function it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, $intern_49);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(183, 63, {}, it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V);
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_11GeoOptionsBeanMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'GeolocationJsObject_GeoOptionsBeanMapperImpl', 183);
function it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, $intern_50);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(182, 63, {}, it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V);
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_11GeolocationBeanMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'GeolocationJsObject_GeolocationBeanMapperImpl', 182);
function it_appify_geolocation_HTML5Geolocation_$watchPosition__Lit_appify_geolocation_HTML5Geolocation_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static, callback){
  it_appify_geolocation_GeolocationJsObject_$watchPosition__Lit_appify_geolocation_GeolocationJsObject_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static.it_appify_geolocation_HTML5Geolocation_geolocation, callback);
}

function it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V(options){
  this.it_appify_geolocation_HTML5Geolocation_geolocation = new it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V(options);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(150, 1, {}, it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1HTML5Geolocation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'HTML5Geolocation', 150);
function it_appify_screenorientation_ScreenOrientationJsObject_$_1getFullScreenObject__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(){
  $wnd.Fullscreen = {launch:function(element){
    console.log('Fullscreen: ' + element);
    if (element.requestFullscreen) {
      console.log('element.requestFullscreen');
      element.requestFullscreen();
    }
     else if (element.mozRequestFullScreen) {
      console.log('element.mozRequestFullScreen');
      element.mozRequestFullScreen();
    }
     else if (element.webkitRequestFullscreen) {
      console.log('element.webkitRequestFullscreen');
      element.webkitRequestFullscreen();
    }
     else if (element.msRequestFullscreen) {
      console.log('element.msRequestFullscreen');
      element.msRequestFullscreen();
    }
     else {
      console.log('no element found :(');
    }
  }
  , exit:function(){
    $doc.exitFullscreen?$doc.exitFullscreen():$doc.mozCancelFullScreen?$doc.mozCancelFullScreen():$doc.webkitExitFullscreen?$doc.webkitExitFullscreen():document.msExitFullscreen && $doc.msExitFullscreen();
  }
  };
  return $wnd.Fullscreen;
}

function it_appify_screenorientation_ScreenOrientationJsObject_$_1getScreenOrientation__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(){
  $wnd.screenOrientation = $wnd.screen.orientation;
  if ('orientation' in screen && 'angle' in screen.orientation) {
    return $wnd.screenOrientation;
  }
  $wnd.screenOrientation = {type:'any', angle:0, fullscreen:false};
  return $wnd.screenOrientation;
}

function it_appify_screenorientation_ScreenOrientationJsObject_$getScreenDetails__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lit_appify_api_Screen_2(){
  var screen_0, it_appify_screenorientation_ScreenOrientationJsObject_$_1getAvailHeight__Lit_appify_screenorientation_ScreenOrientationJsObject_2I_screen_0, it_appify_screenorientation_ScreenOrientationJsObject_$_1getAvailWidth__Lit_appify_screenorientation_ScreenOrientationJsObject_2I_screen_0, it_appify_screenorientation_ScreenOrientationJsObject_$_1getColorDepth__Lit_appify_screenorientation_ScreenOrientationJsObject_2I_screen_0;
  screen_0 = new it_appify_api_Screen_Screen__V;
  it_appify_api_Screen_$setAvailHeight__Lit_appify_api_Screen_2IV(screen_0, $wnd.screen.availHeight);
  it_appify_api_Screen_$setAvailWidth__Lit_appify_api_Screen_2IV(screen_0, $wnd.screen.availWidth);
  it_appify_api_Screen_$setColorDepth__Lit_appify_api_Screen_2IV(screen_0, $wnd.screen.availHeight);
  return screen_0;
}

function it_appify_screenorientation_ScreenOrientationJsObject_$getScreenOrientationDetails__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lit_appify_api_ScreenOrientation_2(){
  var or;
  or = new it_appify_api_ScreenOrientation_ScreenOrientation__V;
  it_appify_api_ScreenOrientation_$setAngle__Lit_appify_api_ScreenOrientation_2DV(or, $wnd.screenOrientation.angle);
  it_appify_api_ScreenOrientation_$setType__Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2V(or, $wnd.screenOrientation.type);
  return or;
}

function it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V(){
  this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen = (!this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen && (this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen = it_appify_screenorientation_ScreenOrientationJsObject_$_1getFullScreenObject__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2()) , this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen);
  $wnd.screen;
  it_appify_screenorientation_ScreenOrientationJsObject_$_1getScreenOrientation__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(179, 1, {}, it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1screenorientation_1ScreenOrientationJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'ScreenOrientationJsObject', 179);
function it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V(){
  new it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(54, 1, {}, it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1screenorientation_1WebScreenOrientationImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'WebScreenOrientationImpl', 54);
function it_appify_view_AppJsPageManager_$_1addPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, pageName){
  var that = this$static;
  $wnd.App.controller(pageName, function(page){
    that.private$it_appify_view_AppJsPageManager$onPageCreated__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(pageName, page);
    $wnd.$(page).on('appShow', function(){
      that.private$it_appify_view_AppJsPageManager$onPageShowed__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(pageName, page);
    }
    );
    $wnd.$(page).on('appHide', function(){
      that.private$it_appify_view_AppJsPageManager$onPageHidden__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(pageName, page);
    }
    );
  }
  );
}

function it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0){
  var that = this$static;
  try {
    $wnd.App.load(name_0, function(){
      console.log('page loaded ' + name_0);
    }
    );
  }
   catch (err) {
    console.log(err);
  }
}

function it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_AppJsPageManager_pages, this$static.it_appify_view_AppJsPageManager_currentPage), 70);
}

function it_appify_view_AppJsPageManager_$setPageListener__Lit_appify_view_AppJsPageManager_2Lit_appify_api_PageManager$PageListener_2V(this$static, pageListener){
  this$static.it_appify_view_AppJsPageManager_listener = pageListener;
}

function it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0){
  it_appify_view_AppJsPageManager_$_1addPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0);
  it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0);
}

function it_appify_view_AppJsPageManager_AppJsPageManager__V(){
  this.it_appify_view_AppJsPageManager_pages = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(123, 1, {}, it_appify_view_AppJsPageManager_AppJsPageManager__V);
_.private$it_appify_view_AppJsPageManager$onPageCreated__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageCreated__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(pageName, e){
  var currentPage, el;
  currentPage = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, pageName), 70);
  el = e;
  !currentPage?(currentPage = new it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el)):(currentPage.it_appify_view_WebPage_pageElement = el);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, 'name', currentPage);
  !!this.it_appify_view_AppJsPageManager_listener && it_appify_view_PageLoader$1_$onPageCreate__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this.it_appify_view_AppJsPageManager_listener, currentPage);
}
;
_.private$it_appify_view_AppJsPageManager$onPageHidden__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageHidden__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(name_0, e){
  var p;
  p = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0), 70);
  java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0);
  !!this.it_appify_view_AppJsPageManager_listener && 'PageLoader onPageHide: ' + p.it_appify_view_WebPage_pageElement.id;
}
;
_.private$it_appify_view_AppJsPageManager$onPageShowed__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageShowed__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(name_0, e){
  var currentPage, el;
  currentPage = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0), 70);
  el = e;
  !currentPage?(currentPage = new it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el)):(currentPage.it_appify_view_WebPage_pageElement = el);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, 'name', currentPage);
  'AppJsPageManager onPageShow: ' + currentPage.it_appify_view_WebPage_pageElement.id;
  this.it_appify_view_AppJsPageManager_currentPage = currentPage.it_appify_view_WebPage_pageElement.id;
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, currentPage.it_appify_view_WebPage_pageElement.id, currentPage);
  !!this.it_appify_view_AppJsPageManager_listener && it_appify_view_PageLoader$1_$onPageShow__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this.it_appify_view_AppJsPageManager_listener, currentPage);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1AppJsPageManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'AppJsPageManager', 123);
function it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static, pageId, model, handlers){
  var pageHandlers;
  if (handlers) {
    pageHandlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 19);
    if (!pageHandlers) {
      pageHandlers = new java_util_ArrayList_ArrayList__V;
      java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId, pageHandlers);
    }
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 19).clear__V();
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 19).addAll__Ljava_util_Collection_2Z(handlers);
  }
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleIncremental__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), new it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V(this$static, pageId, model));
}

function it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V(pm, vm, pl){
  this.it_appify_view_PageLoader_pl = new it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V(this);
  this.it_appify_view_PageLoader_pageHandlers = new java_util_HashMap_HashMap__V;
  this.it_appify_view_PageLoader_pm = pm;
  this.it_appify_view_PageLoader_vm = vm;
  it_appify_view_AppJsPageManager_$setPageListener__Lit_appify_view_AppJsPageManager_2Lit_appify_api_PageManager$PageListener_2V(pm, this.it_appify_view_PageLoader_pl);
  this.it_appify_view_PageLoader_outerPl = pl;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(124, 1, {}, it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V);
_.it_appify_view_PageLoader_outerPl = null;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'PageLoader', 124);
function it_appify_view_PageLoader$1_$onPageCreate__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this$static, page){
  this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_currentShowingPage = page;
  'PageLoader onPageCreate: ' + page.it_appify_view_WebPage_pageElement.id;
}

function it_appify_view_PageLoader$1_$onPageReady__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this$static, page){
  'PageLoader onPageReady: ' + page.it_appify_view_WebPage_pageElement.id;
  !!this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_outerPl && it_appify_app_AbstractWebApp$1_$onPageReady__Lit_appify_app_AbstractWebApp$1_2Lit_appify_api_Page_2V(this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_outerPl, page);
}

function it_appify_view_PageLoader$1_$onPageShow__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this$static, page){
  var h, viewHandlerHolder, viewHandlerHolder$iterator;
  'PageLoader onPageShow: ' + page.it_appify_view_WebPage_pageElement.id;
  h = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_pageHandlers, page.it_appify_view_WebPage_pageElement.id), 19);
  if (h) {
    for (viewHandlerHolder$iterator = h.iterator__Ljava_util_Iterator_2(); viewHandlerHolder$iterator.hasNext__Z();) {
      viewHandlerHolder = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(viewHandlerHolder$iterator.next__Ljava_lang_Object_2(), 50);
      it_appify_view_WebPage_$addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(page, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_viewId, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_eventType, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_handler);
    }
  }
}

function it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V(this$0){
  this.it_appify_view_PageLoader$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(125, 1, {}, it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'PageLoader/1', 125);
function it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V(this$0, val$pageId, val$model){
  this.it_appify_view_PageLoader$2_this$01 = this$0;
  this.it_appify_view_PageLoader$2_val$pageId2 = val$pageId;
  this.it_appify_view_PageLoader$2_val$model3 = val$model;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(126, 1, {}, it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V);
_.execute__Z = function it_appify_view_PageLoader$2_execute__Z(){
  if (!this.it_appify_view_PageLoader$2__1showed) {
    it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_pm, this.it_appify_view_PageLoader$2_val$pageId2);
    this.it_appify_view_PageLoader$2__1showed = true;
    return true;
  }
  if (this.it_appify_view_PageLoader$2__1showed && !this.it_appify_view_PageLoader$2__1bound) {
    it_appify_view_VueJsViewModel_$bindModelToView__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Ljava_lang_Object_2V(this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_vm, this.it_appify_view_PageLoader$2_val$pageId2, this.it_appify_view_PageLoader$2_val$model3);
    this.it_appify_view_PageLoader$2__1showed = true;
    this.it_appify_view_PageLoader$2__1bound = true;
    return true;
  }
  if (this.it_appify_view_PageLoader$2__1showed && this.it_appify_view_PageLoader$2__1bound) {
    it_appify_view_PageLoader$1_$onPageReady__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_pl, this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_currentShowingPage);
    return false;
  }
  return false;
}
;
_.it_appify_view_PageLoader$2__1bound = false;
_.it_appify_view_PageLoader$2__1showed = false;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'PageLoader/2', 126);
function it_appify_view_WebPage_$_1addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(this$static, id_0, type_0, p, h){
  var that = this$static;
  $wnd.$(p).find(id_0).on(type_0, function(){
    h.onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, id_0);
  }
  );
}

function it_appify_view_WebPage_$addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(this$static, id_0, type_0, h){
  var holder, obj;
  holder = new it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V;
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_viewId = id_0;
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_eventType = type_0;
  holder.it_appify_api_HasViewHandlers$ViewHandlerHolder_handler = h;
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.it_appify_view_WebPage_handlers, holder);
  obj = this$static.it_appify_view_WebPage_pageElement;
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(id_0.substr(0, 1), '#') || (id_0 = '#' + id_0);
  it_appify_view_WebPage_$_1addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(this$static, id_0, type_0, obj, h);
}

function it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el){
  this.it_appify_view_WebPage_pageElement = el;
  this.it_appify_view_WebPage_handlers = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(76, 1, {70:1}, it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1WebPage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_62, 'WebPage', 76);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(59, 1, {});
_.toString__Ljava_lang_String_2$ = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'AbstractStringBuilder', 59);
function java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'divide by zero');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(88, 5, $intern_10, java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'ArithmeticException', 88);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(32, 5, $intern_10, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'IndexOutOfBoundsException', 32);
function java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V(){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(139, 32, $intern_10, java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'ArrayIndexOutOfBoundsException', 139);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(44, 5, $intern_10, java_lang_ArrayStoreException_ArrayStoreException__V, java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'ArrayStoreException', 44);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Boolean_FALSE = new java_lang_Boolean_Boolean__ZV(false);
  java_lang_Boolean_TRUE = new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_Boolean__ZV(value_0){
  this.java_lang_Boolean_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(24, 1, {3:1, 24:1, 43:1}, java_lang_Boolean_Boolean__ZV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 24) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 24).java_lang_Boolean_value == this.java_lang_Boolean_value;
}
;
_.hashCode__I$ = function java_lang_Boolean_hashCode__I(){
  return this.java_lang_Boolean_value?1231:1237;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Boolean_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Boolean_value;
}
;
_.java_lang_Boolean_value = false;
var java_lang_Boolean_FALSE, java_lang_Boolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Boolean', 24);
function java_lang_Character_digit__CII(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(35, 5, $intern_10, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'ClassCastException', 35);
function java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(s){
  var java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0;
  if (!(java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 = java_lang_Number_floatRegex , !java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 && (java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 = java_lang_Number_floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/) , java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0.test(s))) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + s + '"');
  }
  return parseFloat(s);
}

function java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_19);
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + s + '"');
  }
  return toReturn;
}

function java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_19);
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > (java_lang_Number$_1_1ParseLong_$clinit__V() , java_lang_Number$_1_1ParseLong_maxLengthForRadix)[10]) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = java_lang_Number$_1_1ParseLong_maxDigitsForRadix[10];
  radixPower = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[10]);
  minValue = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(-java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s.substr(0, head), 10));
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s.substr(0, maxDigits), 10);
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, minValue)) {
        throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
      }
      toReturn = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, radixPower);
    }
    toReturn = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(head));
  }
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
  }
  if (!negative) {
    toReturn = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn);
    if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_76 + orig + '"');
    }
  }
  return toReturn;
}

function java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s, radix){
  return parseInt(s, radix);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(36, 1, {3:1, 36:1});
var java_lang_Number_floatRegex;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Number', 36);
function java_lang_Double_Double__DV(value_0){
  this.java_lang_Double_value = value_0;
}

function java_lang_Double_isInfinite__DZ(x_0){
  return !isFinite(x_0) && !isNaN(x_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(17, 36, {3:1, 43:1, 17:1, 36:1}, java_lang_Double_Double__DV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Double_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 17) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 17).java_lang_Double_value == this.java_lang_Double_value;
}
;
_.hashCode__I$ = function java_lang_Double_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.java_lang_Double_value);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Double_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Double_value;
}
;
_.java_lang_Double_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Double', 17);
function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(41, 5, $intern_10, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'IllegalArgumentException', 41);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(11, 5, $intern_10, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'IllegalStateException', 11);
function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_numberOfLeadingZeros__II(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function java_lang_Integer_numberOfTrailingZeros__II(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(16, 36, {3:1, 43:1, 16:1, 36:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 16) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 16).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I$ = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Integer', 16);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_14, 16, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Long_Long__JV(value_0){
  this.java_lang_Long_value = value_0;
}

function java_lang_Long_valueOf__JLjava_lang_Long_2(i){
  var rebase, result;
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:4194175, m:$intern_35, h:$intern_36}) && com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:128, m:0, h:0})) {
    rebase = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(i) + 128;
    result = (java_lang_Long$BoxedValues_$clinit__V() , java_lang_Long$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Long$BoxedValues_boxedValues[rebase] = new java_lang_Long_Long__JV(i));
    return result;
  }
  return new java_lang_Long_Long__JV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(25, 36, {3:1, 43:1, 25:1, 36:1}, java_lang_Long_Long__JV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Long_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 25) && com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 25).java_lang_Long_value, this.java_lang_Long_value);
}
;
_.hashCode__I$ = function java_lang_Long_hashCode__I(){
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(this.java_lang_Long_value);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Long_toString__Ljava_lang_String_2(){
  return '' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this.java_lang_Long_value);
}
;
_.java_lang_Long_value = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Long', 25);
function java_lang_Long$BoxedValues_$clinit__V(){
  java_lang_Long$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Long$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit, $intern_14, 25, 256, 0, 1);
}

var java_lang_Long$BoxedValues_boxedValues;
function java_lang_Math_pow__DDD(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(40, 5, $intern_10, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'NullPointerException', 40);
function java_lang_Number$_1_1ParseLong_$clinit__V(){
  java_lang_Number$_1_1ParseLong_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var i;
  java_lang_Number$_1_1ParseLong_maxDigitsForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  java_lang_Number$_1_1ParseLong_maxDigitsRadixPower = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, 37, 7, 1);
  java_lang_Number$_1_1ParseLong_maxLengthForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  java_lang_Number$_1_1ParseLong_maxValueForRadix = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_J_1classLit, $intern_14, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i] = com_google_gwt_lang_Cast_round_1int__DI(java_lang_Math_pow__DDD(i, java_lang_Number$_1_1ParseLong_maxDigitsForRadix[i]));
    java_lang_Number$_1_1ParseLong_maxValueForRadix[i] = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2({l:$intern_35, m:$intern_35, h:524287}, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i]));
  }
}

var java_lang_Number$_1_1ParseLong_maxDigitsForRadix, java_lang_Number$_1_1ParseLong_maxDigitsRadixPower, java_lang_Number$_1_1ParseLong_maxLengthForRadix, java_lang_Number$_1_1ParseLong_maxValueForRadix;
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(12, 41, {3:1, 12:1, 5:1, 6:1}, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'NumberFormatException', 12);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function java_lang_String_$getChars__Ljava_lang_String_2II_3CIV(dst, dstBegin){
  var srcIdx;
  for (srcIdx = 0; srcIdx < 5; ++srcIdx) {
    dst[dstBegin++] = ")]}'\n".charCodeAt(srcIdx);
  }
}

function java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function java_lang_String__1_1checkBounds__IIIV(legalCount, start_0, end){
  if (start_0 < 0) {
    throw new java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV(start_0);
  }
  if (end < start_0) {
    throw new java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV(end - start_0);
  }
  if (end > legalCount) {
    throw new java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV(end);
  }
}

function java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function java_lang_String__1_1valueOf___3CIILjava_lang_String_2(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function java_lang_String_valueOf___3CIILjava_lang_String_2(x_0, offset, count){
  var end;
  end = offset + count;
  java_lang_String__1_1checkBounds__IIIV(x_0.length, offset, end);
  return java_lang_String__1_1valueOf___3CIILjava_lang_String_2(x_0, offset, end);
}

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'String', 2);
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = ':' + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += String.fromCharCode(x_0);
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__V(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__IV(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(23, 59, {287:1}, java_lang_StringBuilder_StringBuilder__V, java_lang_StringBuilder_StringBuilder__IV, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'StringBuilder', 23);
function java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV(index_0){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V.call(this, 'String index out of range: ' + index_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(67, 32, $intern_10, java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'StringIndexOutOfBoundsException', 67);
function java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(src_0, 'src');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(dest, 'dest');
  srcType = java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(src_0);
  destType = java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(dest);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((srcType.java_lang_Class_modifiers & 4) != 0, 'srcType is not an array');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((destType.java_lang_Class_modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.java_lang_Class_componentType;
  destComp = destType.java_lang_Class_componentType;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((srcComp.java_lang_Class_modifiers & 1) != 0?srcComp == destComp:(destComp.java_lang_Class_modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (((srcComp.java_lang_Class_modifiers & 1) == 0 || (srcComp.java_lang_Class_modifiers & 4) != 0) && srcType != destType) {
    srcArray = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, 288);
    destArray = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(dest, 288);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(src_0, srcOfs, dest, destOfs, len, true);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(52, 5, $intern_10, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'UnsupportedOperationException', 52);
function java_math_BigInteger_$clinit__V(){
  java_math_BigInteger_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var i;
  java_math_BigInteger_ONE = new java_math_BigInteger_BigInteger__IIV(1, 1);
  java_math_BigInteger_TEN = new java_math_BigInteger_BigInteger__IIV(1, 10);
  java_math_BigInteger_ZERO = new java_math_BigInteger_BigInteger__IIV(0, 0);
  java_math_BigInteger_MINUS_1ONE = new java_math_BigInteger_BigInteger__IIV(-1, 1);
  java_math_BigInteger_SMALL_1VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, 1), $intern_14, 9, 0, [java_math_BigInteger_ZERO, java_math_BigInteger_ONE, new java_math_BigInteger_BigInteger__IIV(1, 2), new java_math_BigInteger_BigInteger__IIV(1, 3), new java_math_BigInteger_BigInteger__IIV(1, 4), new java_math_BigInteger_BigInteger__IIV(1, 5), new java_math_BigInteger_BigInteger__IIV(1, 6), new java_math_BigInteger_BigInteger__IIV(1, 7), new java_math_BigInteger_BigInteger__IIV(1, 8), new java_math_BigInteger_BigInteger__IIV(1, 9), java_math_BigInteger_TEN]);
  java_math_BigInteger_TWO_1POWS = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 9, 32, 0, 1);
  for (i = 0; i < java_math_BigInteger_TWO_1POWS.length; i++) {
    java_math_BigInteger_TWO_1POWS[i] = java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2({l:1, m:0, h:0}, i));
  }
}

function java_math_BigInteger_$$init__Ljava_math_BigInteger_2V(this$static){
}

function java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(this$static){
  while (this$static.java_math_BigInteger_numberLength > 0 && this$static.java_math_BigInteger_digits[--this$static.java_math_BigInteger_numberLength] == 0)
  ;
  this$static.java_math_BigInteger_digits[this$static.java_math_BigInteger_numberLength++] == 0 && (this$static.java_math_BigInteger_sign = 0);
}

function java_math_BigInteger_$equalsArrays__Ljava_math_BigInteger_2_3IZ(this$static, b){
  var i;
  for (i = this$static.java_math_BigInteger_numberLength - 1; i >= 0 && this$static.java_math_BigInteger_digits[i] == b[i]; i--)
  ;
  return i < 0;
}

function java_math_BigInteger_$multiply__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(this$static, val){
  if (val.java_math_BigInteger_sign == 0) {
    return java_math_BigInteger_ZERO;
  }
  if (this$static.java_math_BigInteger_sign == 0) {
    return java_math_BigInteger_ZERO;
  }
  return java_math_Multiplication_$clinit__V() , java_math_Multiplication_karatsuba__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(this$static, val);
}

function java_math_BigInteger_$shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, n){
  if (n == 0 || this$static.java_math_BigInteger_sign == 0) {
    return this$static;
  }
  return n > 0?java_math_BitLevel_shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, n):java_math_BitLevel_shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, -n);
}

function java_math_BigInteger_$shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, n){
  if (n == 0 || this$static.java_math_BigInteger_sign == 0) {
    return this$static;
  }
  return n > 0?java_math_BitLevel_shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, n):java_math_BitLevel_shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(this$static, -n);
}

function java_math_BigInteger_BigInteger__IIV(sign, value_0){
  java_math_BigInteger_$clinit__V();
  java_math_BigInteger_$$init__Ljava_math_BigInteger_2V(this);
  this.java_math_BigInteger_sign = sign;
  this.java_math_BigInteger_numberLength = 1;
  this.java_math_BigInteger_digits = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [value_0]);
}

function java_math_BigInteger_BigInteger__II_3IV(sign, numberLength, digits){
  java_math_BigInteger_$clinit__V();
  java_math_BigInteger_$$init__Ljava_math_BigInteger_2V(this);
  this.java_math_BigInteger_sign = sign;
  this.java_math_BigInteger_numberLength = numberLength;
  this.java_math_BigInteger_digits = digits;
}

function java_math_BigInteger_BigInteger__IJV(sign, val){
  java_math_BigInteger_$$init__Ljava_math_BigInteger_2V(this);
  this.java_math_BigInteger_sign = sign;
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(val, {l:0, m:4193280, h:$intern_36}), {l:0, m:0, h:0})) {
    this.java_math_BigInteger_numberLength = 1;
    this.java_math_BigInteger_digits = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(val)]);
  }
   else {
    this.java_math_BigInteger_numberLength = 2;
    this.java_math_BigInteger_digits = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(val), com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(val, 32))]);
  }
}

function java_math_BigInteger_BigInteger__Ljava_lang_String_2V(val){
  java_math_BigInteger_$clinit__V();
  java_math_BigInteger_BigInteger__Ljava_lang_String_2IV.call(this, val);
}

function java_math_BigInteger_BigInteger__Ljava_lang_String_2IV(val){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(val);
  if (!val.length) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V('Zero length BigInteger');
  }
  java_math_BigInteger_setFromString__Ljava_math_BigInteger_2Ljava_lang_String_2IV(this, val);
}

function java_math_BigInteger_setFromString__Ljava_math_BigInteger_2Ljava_lang_String_2IV(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = (java_math_Conversion_$clinit__V() , java_math_Conversion_digitFitInInt)[10];
  bigRadixDigitsLength = ~~(stringLength / charsPerInt);
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, bigRadixDigitsLength, 7, 1);
  bigRadix = java_math_Conversion_bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrEnd + charsPerInt) {
    bigRadixDigit = java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(val.substr(substrStart, substrEnd - substrStart));
    newDigit = (java_math_Multiplication_$clinit__V() , java_math_Multiplication_multiplyByInt___3I_3IIII(digits, digits, digitIndex, bigRadix));
    newDigit += java_math_Elementary_inplaceAdd___3IIII(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  bi.java_math_BigInteger_sign = sign;
  bi.java_math_BigInteger_numberLength = digitIndex;
  bi.java_math_BigInteger_digits = digits;
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(bi);
}

function java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(val){
  java_math_BigInteger_$clinit__V();
  if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(val, {l:0, m:0, h:0})) {
    if (com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(val, {l:$intern_35, m:$intern_35, h:$intern_36})) {
      return new java_math_BigInteger_BigInteger__IJV(-1, com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(val));
    }
    return java_math_BigInteger_MINUS_1ONE;
  }
   else 
    return com_google_gwt_lang_LongLib_lte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(val, {l:10, m:0, h:0})?java_math_BigInteger_SMALL_1VALUES[com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(val)]:new java_math_BigInteger_BigInteger__IJV(1, val);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(9, 36, {3:1, 43:1, 36:1, 9:1}, java_math_BigInteger_BigInteger__IIV, java_math_BigInteger_BigInteger__II_3IV, java_math_BigInteger_BigInteger__IJV, java_math_BigInteger_BigInteger__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function java_math_BigInteger_equals__Ljava_lang_Object_2Z(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(x_0, 9)) {
    x1 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(x_0, 9);
    return this.java_math_BigInteger_sign == x1.java_math_BigInteger_sign && this.java_math_BigInteger_numberLength == x1.java_math_BigInteger_numberLength && java_math_BigInteger_$equalsArrays__Ljava_math_BigInteger_2_3IZ(this, x1.java_math_BigInteger_digits);
  }
  return false;
}
;
_.hashCode__I$ = function java_math_BigInteger_hashCode__I(){
  var i;
  if (this.java_math_BigInteger_hashCode != 0) {
    return this.java_math_BigInteger_hashCode;
  }
  for (i = 0; i < this.java_math_BigInteger_digits.length; i++) {
    this.java_math_BigInteger_hashCode = this.java_math_BigInteger_hashCode * 33 + (this.java_math_BigInteger_digits[i] & -1);
  }
  this.java_math_BigInteger_hashCode = this.java_math_BigInteger_hashCode * this.java_math_BigInteger_sign;
  return this.java_math_BigInteger_hashCode;
}
;
_.toString__Ljava_lang_String_2$ = function java_math_BigInteger_toString__Ljava_lang_String_2(){
  return java_math_Conversion_toDecimalScaledString__Ljava_math_BigInteger_2ILjava_lang_String_2(this, 0);
}
;
_.java_math_BigInteger_hashCode = 0;
_.java_math_BigInteger_numberLength = 0;
_.java_math_BigInteger_sign = 0;
var java_math_BigInteger_MINUS_1ONE, java_math_BigInteger_ONE, java_math_BigInteger_SMALL_1VALUES, java_math_BigInteger_TEN, java_math_BigInteger_TWO_1POWS, java_math_BigInteger_ZERO;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('java.math', 'BigInteger', 9);
function java_math_BitLevel_shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.java_math_BigInteger_numberLength + intCount + (count == 0?0:1);
  resDigits = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, resLength, 7, 1);
  java_math_BitLevel_shiftLeft___3I_3IIIV(resDigits, source.java_math_BigInteger_digits, intCount, count);
  result = new java_math_BigInteger_BigInteger__II_3IV(source.java_math_BigInteger_sign, resLength, resDigits);
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(result);
  return result;
}

function java_math_BitLevel_shiftLeft___3I_3IIIV(result, source, intCount, count){
  var i, i0, rightShiftCount;
  if (count == 0) {
    java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i0 = result.length - 1; i0 > intCount; i0--) {
      result[i0] |= source[i0 - intCount - 1] >>> rightShiftCount;
      result[i0 - 1] = source[i0 - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; i++) {
    result[i] = 0;
  }
}

function java_math_BitLevel_shiftLeftOneBit___3I_3IIV(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; i++) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function java_math_BitLevel_shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.java_math_BigInteger_numberLength) {
    return source.java_math_BigInteger_sign < 0?(java_math_BigInteger_$clinit__V() , java_math_BigInteger_MINUS_1ONE):(java_math_BigInteger_$clinit__V() , java_math_BigInteger_ZERO);
  }
  resLength = source.java_math_BigInteger_numberLength - intCount;
  resDigits = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, resLength + 1, 7, 1);
  java_math_BitLevel_shiftRight___3II_3IIIZ(resDigits, resLength, source.java_math_BigInteger_digits, intCount, count);
  if (source.java_math_BigInteger_sign < 0) {
    for (i = 0; i < intCount && source.java_math_BigInteger_digits[i] == 0; i++)
    ;
    if (i < intCount || count > 0 && source.java_math_BigInteger_digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; i++) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new java_math_BigInteger_BigInteger__II_3IV(source.java_math_BigInteger_sign, resLength, resDigits);
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(result);
  return result;
}

function java_math_BitLevel_shiftRight___3II_3IIIZ(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; i++) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(source, intCount, result, 0, resultLen);
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; i++) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function java_math_Conversion_$clinit__V(){
  java_math_Conversion_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_math_Conversion_bigRadices = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-2147483648, 1162261467, $intern_77, 1220703125, 362797056, 1977326743, $intern_77, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, $intern_77, 1291467969, 1544804416, 1838265625, 60466176]);
  java_math_Conversion_digitFitInInt = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function java_math_Conversion_divideLongByBillion__JJ(a){
  var aPos, quot, rem;
  if (com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, {l:0, m:0, h:0})) {
    quot = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, {l:1755648, m:238, h:0});
    rem = com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, {l:1755648, m:238, h:0});
  }
   else {
    aPos = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, 1);
    quot = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(aPos, {l:877824, m:119, h:0});
    rem = com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(aPos, {l:877824, m:119, h:0});
    rem = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(rem, 1), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, {l:1, m:0, h:0}));
  }
  return com_google_gwt_lang_LongLib_or__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(rem, 32), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(quot, {l:$intern_35, m:1023, h:0}));
}

function java_math_Conversion_toDecimalScaledString__Ljava_math_BigInteger_2ILjava_lang_String_2(val, scale){
  java_math_Conversion_$clinit__V();
  var currentChar, delta, digits, exponent, highDigit, i, i1, insertPoint, j, j0, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result10, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.java_math_BigInteger_sign;
  numberLength = val.java_math_BigInteger_numberLength;
  digits = val.java_math_BigInteger_digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new java_lang_StringBuilder_StringBuilder__V;
        scale < 0?(result10.java_lang_AbstractStringBuilder_string += '0E+' , result10):(result10.java_lang_AbstractStringBuilder_string += '0E' , result10);
        result10.java_lang_AbstractStringBuilder_string += -scale;
        return result10.java_lang_AbstractStringBuilder_string;
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, $intern_14, 0, resLengthInChars + 1, 7, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(highDigit), {l:$intern_35, m:1023, h:0});
      do {
        prev = v;
        v = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(v, {l:10, m:0, h:0});
        result[--currentChar] = 48 + com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(prev, com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(v, {l:10, m:0, h:0}))) & $intern_26;
      }
       while (com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(v, {l:0, m:0, h:0}));
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = ~~(v / 10);
        result[--currentChar] = 48 + (prev - v * 10) & $intern_26;
      }
       while (v != 0);
    }
  }
   else {
    temp = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, numberLength, 7, 1);
    tempLen = numberLength;
    java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(digits, 0, temp, 0, numberLength);
    BIG_LOOP: while (true) {
      result11 = {l:0, m:0, h:0};
      for (i1 = tempLen - 1; i1 >= 0; i1--) {
        temp1 = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(result11, 32), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(temp[i1]), {l:$intern_35, m:1023, h:0}));
        res = java_math_Conversion_divideLongByBillion__JJ(temp1);
        temp[i1] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(res);
        result11 = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res, 32)));
      }
      resDigit = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & $intern_26;
      }
       while ((resDigit = ~~(resDigit / 10)) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; i++) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; j--) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return java_lang_String_valueOf___3CIILjava_lang_String_2(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j0 = resLengthInChars - 1; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return java_lang_String_valueOf___3CIILjava_lang_String_2(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return java_lang_String_valueOf___3CIILjava_lang_String_2(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new java_lang_StringBuilder_StringBuilder__IV;
  negNumber && (result1.java_lang_AbstractStringBuilder_string += '-' , result1);
  if (resLengthInChars - startPoint >= 1) {
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2CLjava_lang_StringBuilder_2(result1, result[currentChar]);
    result1.java_lang_AbstractStringBuilder_string += '.';
    result1.java_lang_AbstractStringBuilder_string += java_lang_String_valueOf___3CIILjava_lang_String_2(result, currentChar + 1, resLengthInChars - currentChar - 1);
  }
   else {
    result1.java_lang_AbstractStringBuilder_string += java_lang_String_valueOf___3CIILjava_lang_String_2(result, currentChar, resLengthInChars - currentChar);
  }
  result1.java_lang_AbstractStringBuilder_string += 'E';
  exponent > 0 && (result1.java_lang_AbstractStringBuilder_string += '+' , result1);
  result1.java_lang_AbstractStringBuilder_string += '' + exponent;
  return result1.java_lang_AbstractStringBuilder_string;
}

var java_math_Conversion_bigRadices, java_math_Conversion_digitFitInInt;
function java_math_Elementary_add__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, res0, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.java_math_BigInteger_sign;
  op2Sign = op2.java_math_BigInteger_sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.java_math_BigInteger_numberLength;
  op2Len = op2.java_math_BigInteger_numberLength;
  if (op1Len + op2Len == 2) {
    a = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op1.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0});
    b = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op2.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0});
    if (op1Sign == op2Sign) {
      res0 = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b);
      valueLo = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(res0);
      valueHi = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res0, 32));
      return valueHi == 0?new java_math_BigInteger_BigInteger__IIV(op1Sign, valueLo):new java_math_BigInteger_BigInteger__II_3IV(op1Sign, 2, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [valueLo, valueHi]));
    }
    return java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(op1Sign < 0?com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(b, a):com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?java_math_Elementary_add___3II_3II_3I(op1.java_math_BigInteger_digits, op1Len, op2.java_math_BigInteger_digits, op2Len):java_math_Elementary_add___3II_3II_3I(op2.java_math_BigInteger_digits, op2Len, op1.java_math_BigInteger_digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:java_math_Elementary_compareArrays___3I_3III(op1.java_math_BigInteger_digits, op2.java_math_BigInteger_digits, op1Len);
    if (cmp == 0) {
      return java_math_BigInteger_$clinit__V() , java_math_BigInteger_ZERO;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = java_math_Elementary_subtract___3II_3II_3I(op1.java_math_BigInteger_digits, op1Len, op2.java_math_BigInteger_digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = java_math_Elementary_subtract___3II_3II_3I(op2.java_math_BigInteger_digits, op2Len, op1.java_math_BigInteger_digits, op1Len);
    }
  }
  res = new java_math_BigInteger_BigInteger__II_3IV(resSign, resDigits.length, resDigits);
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(res);
  return res;
}

function java_math_Elementary_add___3II_3II_3I(a, aSize, b, bSize){
  var res;
  res = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, aSize + 1, 7, 1);
  java_math_Elementary_add___3I_3II_3IIV(res, a, aSize, b, bSize);
  return res;
}

function java_math_Elementary_add___3I_3II_3IIV(res, a, aSize, b, bSize){
  var carry, i;
  carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[0]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[0]), {l:$intern_35, m:1023, h:0}));
  res[0] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
  carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_35, m:1023, h:0})));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_35, m:1023, h:0})));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_35, m:1023, h:0}));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
  }
  com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(carry, {l:0, m:0, h:0}) && (res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry));
}

function java_math_Elementary_compareArrays___3I_3III(a, b, size_0){
  var i;
  for (i = size_0 - 1; i >= 0 && a[i] == b[i]; i--)
  ;
  return i < 0?0:com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_35, m:1023, h:0}))?-1:1;
}

function java_math_Elementary_inplaceAdd___3IIII(a, aSize, addend){
  var carry, i;
  carry = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(addend), {l:$intern_35, m:1023, h:0});
  for (i = 0; com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(carry, {l:0, m:0, h:0}) && i < aSize; i++) {
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}));
    a[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
    carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
  }
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
}

function java_math_Elementary_subtract__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.java_math_BigInteger_sign;
  op2Sign = op2.java_math_BigInteger_sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.java_math_BigInteger_sign == 0?op2:new java_math_BigInteger_BigInteger__II_3IV(-op2.java_math_BigInteger_sign, op2.java_math_BigInteger_numberLength, op2.java_math_BigInteger_digits);
  }
  op1Len = op1.java_math_BigInteger_numberLength;
  op2Len = op2.java_math_BigInteger_numberLength;
  if (op1Len + op2Len == 2) {
    a = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op1.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0});
    b = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op2.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0});
    op1Sign < 0 && (a = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
    op2Sign < 0 && (b = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(b));
    return java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:java_math_Elementary_compareArrays___3I_3III(op1.java_math_BigInteger_digits, op2.java_math_BigInteger_digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?java_math_Elementary_subtract___3II_3II_3I(op2.java_math_BigInteger_digits, op2Len, op1.java_math_BigInteger_digits, op1Len):java_math_Elementary_add___3II_3II_3I(op2.java_math_BigInteger_digits, op2Len, op1.java_math_BigInteger_digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return java_math_BigInteger_$clinit__V() , java_math_BigInteger_ZERO;
      }
      resDigits = java_math_Elementary_subtract___3II_3II_3I(op1.java_math_BigInteger_digits, op1Len, op2.java_math_BigInteger_digits, op2Len);
    }
     else {
      resDigits = java_math_Elementary_add___3II_3II_3I(op1.java_math_BigInteger_digits, op1Len, op2.java_math_BigInteger_digits, op2Len);
    }
  }
  res = new java_math_BigInteger_BigInteger__II_3IV(resSign, resDigits.length, resDigits);
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(res);
  return res;
}

function java_math_Elementary_subtract___3II_3II_3I(a, aSize, b, bSize){
  var res;
  res = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, aSize, 7, 1);
  java_math_Elementary_subtract___3I_3II_3IIV(res, a, aSize, b, bSize);
  return res;
}

function java_math_Elementary_subtract___3I_3II_3IIV(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = {l:0, m:0, h:0};
  for (i = 0; i < bSize; i++) {
    borrow = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_35, m:1023, h:0})));
    res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(borrow);
    borrow = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}));
    res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(borrow);
    borrow = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, 32);
  }
}

function java_math_Multiplication_$clinit__V(){
  java_math_Multiplication_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var fivePow, i;
  java_math_Multiplication_bigFivePows = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 9, 32, 0, 1);
  java_math_Multiplication_bigTenPows = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 9, 32, 0, 1);
  fivePow = {l:1, m:0, h:0};
  for (i = 0; i <= 18; i++) {
    java_math_Multiplication_bigFivePows[i] = java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(fivePow);
    java_math_Multiplication_bigTenPows[i] = java_math_BigInteger_valueOf__JLjava_math_BigInteger_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(fivePow, i));
    fivePow = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(fivePow, {l:5, m:0, h:0});
  }
  for (; i < java_math_Multiplication_bigTenPows.length; i++) {
    java_math_Multiplication_bigFivePows[i] = java_math_BigInteger_$multiply__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(java_math_Multiplication_bigFivePows[i - 1], java_math_Multiplication_bigFivePows[1]);
    java_math_Multiplication_bigTenPows[i] = java_math_BigInteger_$multiply__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(java_math_Multiplication_bigTenPows[i - 1], (java_math_BigInteger_$clinit__V() , java_math_BigInteger_TEN));
  }
}

function java_math_Multiplication_karatsuba__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op1, op2){
  java_math_Multiplication_$clinit__V();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.java_math_BigInteger_numberLength > op1.java_math_BigInteger_numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.java_math_BigInteger_numberLength < 63) {
    return java_math_Multiplication_multiplyPAP__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op1, op2);
  }
  ndiv2 = (op1.java_math_BigInteger_numberLength & -2) << 4;
  upperOp1 = java_math_BigInteger_$shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(op1, ndiv2);
  upperOp2 = java_math_BigInteger_$shiftRight__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(op2, ndiv2);
  lowerOp1 = java_math_Elementary_subtract__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op1, java_math_BigInteger_$shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(upperOp1, ndiv2));
  lowerOp2 = java_math_Elementary_subtract__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(op2, java_math_BigInteger_$shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(upperOp2, ndiv2));
  upper = java_math_Multiplication_karatsuba__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(upperOp1, upperOp2);
  lower = java_math_Multiplication_karatsuba__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(lowerOp1, lowerOp2);
  middle = java_math_Multiplication_karatsuba__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(java_math_Elementary_subtract__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(upperOp1, lowerOp1), java_math_Elementary_subtract__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(lowerOp2, upperOp2));
  middle = java_math_Elementary_add__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(java_math_Elementary_add__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(middle, upper), lower);
  middle = java_math_BigInteger_$shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(middle, ndiv2);
  upper = java_math_BigInteger_$shiftLeft__Ljava_math_BigInteger_2ILjava_math_BigInteger_2(upper, ndiv2 << 1);
  return java_math_Elementary_add__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(java_math_Elementary_add__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(upper, middle), lower);
}

function java_math_Multiplication_multArraysPAP___3II_3II_3IV(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = java_math_Multiplication_multiplyByInt___3I_3IIII(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = java_math_Multiplication_multiplyByInt___3I_3IIII(resDigits, aDigits, aLen, bDigits[0])):java_math_Multiplication_multPAP___3I_3I_3IIIV(aDigits, bDigits, resDigits, aLen, bLen);
}

function java_math_Multiplication_multPAP___3I_3I_3IIIV(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) && aLen == bLen) {
    java_math_Multiplication_square___3II_3I_3I(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; i++) {
    carry = {l:0, m:0, h:0};
    aI = a[i];
    for (j = 0; j < bLen; j++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(aI), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[j]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(t[i + j]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_35, m:1023, h:0}));
      t[i + j] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    t[i + bLen] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
  }
}

function java_math_Multiplication_multiplyByInt___3I_3IIII(res, a, aSize, factor){
  java_math_Multiplication_$clinit__V();
  var carry, i;
  carry = {l:0, m:0, h:0};
  for (i = 0; i < aSize; i++) {
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(factor), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_35, m:1023, h:0}));
    res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
    carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
  }
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
}

function java_math_Multiplication_multiplyPAP__Ljava_math_BigInteger_2Ljava_math_BigInteger_2Ljava_math_BigInteger_2(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.java_math_BigInteger_numberLength;
  bLen = b.java_math_BigInteger_numberLength;
  resLength = aLen + bLen;
  resSign = a.java_math_BigInteger_sign != b.java_math_BigInteger_sign?-1:1;
  if (resLength == 2) {
    val = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b.java_math_BigInteger_digits[0]), {l:$intern_35, m:1023, h:0}));
    valueLo = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(val);
    valueHi = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(val, 32));
    return valueHi == 0?new java_math_BigInteger_BigInteger__IIV(resSign, valueLo):new java_math_BigInteger_BigInteger__II_3IV(resSign, 2, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [valueLo, valueHi]));
  }
  aDigits = a.java_math_BigInteger_digits;
  bDigits = b.java_math_BigInteger_digits;
  resDigits = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, resLength, 7, 1);
  java_math_Multiplication_multArraysPAP___3II_3II_3IV(aDigits, aLen, bDigits, bLen, resDigits);
  result = new java_math_BigInteger_BigInteger__II_3IV(resSign, resLength, resDigits);
  java_math_BigInteger_$cutOffLeadingZeroes__Ljava_math_BigInteger_2V(result);
  return result;
}

function java_math_Multiplication_square___3II_3I_3I(a, aLen, res){
  var carry, i, i0, index_0, j;
  for (i0 = 0; i0 < aLen; i0++) {
    carry = {l:0, m:0, h:0};
    for (j = i0 + 1; j < aLen; j++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i0]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[j]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[i0 + j]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_35, m:1023, h:0}));
      res[i0 + j] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    res[i0 + aLen] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
  }
  java_math_BitLevel_shiftLeftOneBit___3I_3IIV(res, res, aLen << 1);
  carry = {l:0, m:0, h:0};
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[index_0]), {l:$intern_35, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_35, m:1023, h:0}));
    res[index_0] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
    carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    ++index_0;
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[index_0]), {l:$intern_35, m:1023, h:0}));
    res[index_0] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
    carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
  }
  return res;
}

var java_math_Multiplication_bigFivePows, java_math_Multiplication_bigTenPows;
function java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var changed, e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    changed = changed | this$static.add__Ljava_lang_Object_2Z(e);
  }
  return changed;
}

function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  comma = false;
  for (e$iterator = this$static.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    sb.java_lang_AbstractStringBuilder_string += e === this$static?'(this Collection)':'' + e;
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(274, 1, {});
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection');
}
;
_.addAll__Ljava_util_Collection_2Z = function java_util_AbstractCollection_addAll__Ljava_util_Collection_2Z(c){
  return java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2(){
  return this.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_14, 1, this.size__I(), 3, 1));
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  var i, it, size_0;
  size_0 = this.size__I();
  a.length < size_0 && (a = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(a, size_0));
  it = this.iterator__Ljava_util_Iterator_2();
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, i, it.next__Ljava_lang_Object_2());
  }
  a.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, size_0, null);
  return a;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractCollection', 274);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(273, 1, {68:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 68)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 68);
  if (this.java_util_AbstractHashMap_size != otherMap.java_util_AbstractHashMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , entry$iterator.java_util_AbstractHashMap$EntrySetIterator_last = entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 14));
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var comma, entry, entry$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  comma = false;
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , entry$iterator.java_util_AbstractHashMap$EntrySetIterator_last = entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 14));
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()));
    sb.java_lang_AbstractStringBuilder_string += '=';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap', 273);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static){
  ++this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static){
  --this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):!(this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key) === undefined);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):this$static.java_util_AbstractHashMap_stringMap.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):this$static.java_util_AbstractHashMap_stringMap.remove__Ljava_lang_String_2Ljava_lang_Object_2(key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V();
  this$static.java_util_AbstractHashMap_hashCodeMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2();
  this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalJsHashCodeMap_host = this$static;
  this$static.java_util_AbstractHashMap_stringMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsStringMap__Ljava_util_InternalJsStringMap_2();
  this$static.java_util_AbstractHashMap_stringMap.java_util_InternalJsStringMap_host = this$static;
  this$static.java_util_AbstractHashMap_size = 0;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(60, 273, {68:1});
_.java_util_AbstractHashMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap', 60);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(275, 274, {48:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 48)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 48);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I$ = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractSet', 275);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 14)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 14));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(38, 275, {48:1}, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 14).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$01.java_util_AbstractHashMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap/EntrySet', 38);
function java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap.entries__Ljava_util_Iterator_2();
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this$static){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static)) , this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 14);
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this$static.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap.entries__Ljava_util_Iterator_2();
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(this, this$0._gwt_modCount);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(39, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap/EntrySetIterator', 39);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(277, 274, {19:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list');
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.clear__V = function java_util_AbstractList_clear__V(){
  this.removeRange__IIV(0, this.size__I());
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 19)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 19);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.java_util_AbstractList$IteratorImpl_i < elem$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    elem = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(elem$iterator.java_util_AbstractList$IteratorImpl_i < elem$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , elem$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(elem$iterator.java_util_AbstractList$IteratorImpl_last = elem$iterator.java_util_AbstractList$IteratorImpl_i++));
    elemOther = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(iterOther.java_util_AbstractList$IteratorImpl_i < iterOther.java_util_AbstractList$IteratorImpl_this$01.size__I()) , iterOther.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(iterOther.java_util_AbstractList$IteratorImpl_last = iterOther.java_util_AbstractList$IteratorImpl_i++));
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list');
}
;
_.removeRange__IIV = function java_util_AbstractList_removeRange__IIV(fromIndex, endIndex){
  var i, iter;
  iter = new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next__Ljava_lang_Object_2();
    iter.remove__V();
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList', 277);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(51, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I()) , this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_AbstractList$IteratorImpl_last != -1);
  this.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last);
  this.java_util_AbstractList$IteratorImpl_i = this.java_util_AbstractList$IteratorImpl_last;
  this.java_util_AbstractList$IteratorImpl_last = -1;
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList/IteratorImpl', 51);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(107, 51, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList/ListIteratorImpl', 107);
function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01);
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}

function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(72, 275, {48:1}, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key)) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_this$01.java_util_AbstractHashMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/1', 72);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(87, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/1/1', 87);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(85, 1, $intern_79);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 14)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 14);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I$ = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/AbstractEntry', 85);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(86, 85, $intern_79, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/SimpleEntry', 86);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(278, 1, $intern_79);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 14)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 14);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I$ = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2());
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.getKey__Ljava_lang_Object_2() + '=' + this.getValue__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMapEntry', 278);
function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this$static, index_0, o){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(this$static.java_util_ArrayList_array, index_0, 0, o);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length, o);
  return true;
}

function java_util_ArrayList_$addAll__Ljava_util_ArrayList_2Ljava_util_Collection_2Z(this$static, c){
  var cArray, len;
  cArray = c.toArray___3Ljava_lang_Object_2();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  java_util_ArrayList_$insertAt__Ljava_util_ArrayList_2I_3Ljava_lang_Object_2V(this$static, this$static.java_util_ArrayList_array.length, cArray);
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$insertAt__Ljava_util_ArrayList_2I_3Ljava_lang_Object_2V(this$static, index_0, values){
  com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(values, 0, this$static.java_util_ArrayList_array, index_0, values.length, false);
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0, 1);
  return previous;
}

function java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this$static, fromIndex, endIndex){
  var count;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalPositionIndexes__IIIV(fromIndex, endIndex, this$static.java_util_ArrayList_array.length);
  count = endIndex - fromIndex;
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, fromIndex, count);
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(this$static){
  return com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length);
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, size_0;
  size_0 = this$static.java_util_ArrayList_array.length;
  out.length < size_0 && (out = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(out, size_0));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}

function java_util_ArrayList_ArrayList__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_14, 1, 0, 3, 1);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(31, 277, $intern_80, java_util_ArrayList_ArrayList__V);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.addAll__Ljava_util_Collection_2Z = function java_util_ArrayList_addAll__Ljava_util_Collection_2Z(c){
  return java_util_ArrayList_$addAll__Ljava_util_ArrayList_2Ljava_util_Collection_2Z(this, c);
}
;
_.clear__V = function java_util_ArrayList_clear__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_14, 1, 0, 3, 1);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.remove__ILjava_lang_Object_2 = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0);
  if (i == -1) {
    return false;
  }
  this.remove__ILjava_lang_Object_2(i);
  return true;
}
;
_.removeRange__IIV = function java_util_ArrayList_removeRange__IIV(fromIndex, endIndex){
  java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this, fromIndex, endIndex);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2(){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(this);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this, out);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'ArrayList', 31);
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections_EMPTY_1SET = new java_util_Collections$EmptySet_Collections$EmptySet__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.java_util_AbstractList$IteratorImpl_i < e$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    e = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(e$iterator.java_util_AbstractList$IteratorImpl_i < e$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , e$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(e$iterator.java_util_AbstractList$IteratorImpl_last = e$iterator.java_util_AbstractList$IteratorImpl_i++));
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var java_util_Collections_EMPTY_1SET;
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(105, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.remove__V = function java_util_Collections$EmptyListIterator_remove__V(){
  throw new java_lang_IllegalStateException_IllegalStateException__V;
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Collections/EmptyListIterator', 105);
function java_util_Collections$EmptySet_Collections$EmptySet__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(106, 275, {3:1, 48:1}, java_util_Collections$EmptySet_Collections$EmptySet__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptySet_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptySet_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptySet_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Collections/EmptySet', 106);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new java_util_ConcurrentModificationException_ConcurrentModificationException__V;
  }
}

function java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(iterator, host._gwt_modCount);
}

function java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(o, modCount){
  o._gwt_modCount = modCount;
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(map_0, modCount + 1);
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(140, 5, $intern_10, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'ConcurrentModificationException', 140);
function java_util_EmptyStackException_EmptyStackException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(217, 5, $intern_10, java_util_EmptyStackException_EmptyStackException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1EmptyStackException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'EmptyStackException', 217);
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key){
  var hashCode;
  hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key);
  return ~~hashCode;
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

function java_util_HashMap_HashMap__IV(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Negative initial capacity');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Non-positive load factor');
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(37, 60, {3:1, 68:1}, java_util_HashMap_HashMap__V, java_util_HashMap_HashMap__IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'HashMap', 37);
function java_util_HashSet_HashSet__Ljava_util_Collection_2V(c){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__IV;
  java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(185, 275, {3:1, 48:1}, java_util_HashSet_HashSet__Ljava_util_Collection_2V);
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashSet_map, o, this);
  return old == null;
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_HashSet_map, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashSet_map, o) != null;
}
;
_.size__I = function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_HashSet_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'HashSet', 185);
function java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var map_0 = this$static.java_util_InternalJsHashCodeMap_backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode];
}

function java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] || [];
}

function java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsHashCodeMap_backingMap);
}

function java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain, chain.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
  return null;
}

function java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key);
  chain = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      chain.length == 1?(delete this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V(){
  this.java_util_InternalJsHashCodeMap_backingMap = this.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(74, 1, {}, java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap_entries__Ljava_util_Iterator_2(){
  return new java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap', 74);
function java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this$static){
  if (this$static.java_util_InternalJsHashCodeMap$1_itemIndex < this$static.java_util_InternalJsHashCodeMap$1_chain.length) {
    return true;
  }
  if (this$static.java_util_InternalJsHashCodeMap$1_chainIndex < this$static.java_util_InternalJsHashCodeMap$1_keys.length - 1) {
    this$static.java_util_InternalJsHashCodeMap$1_chain = java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static.java_util_InternalJsHashCodeMap$1_this$01, this$static.java_util_InternalJsHashCodeMap$1_keys[++this$static.java_util_InternalJsHashCodeMap$1_chainIndex]);
    this$static.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}

function java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this$0){
  this.java_util_InternalJsHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalJsHashCodeMap$1_keys = java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this.java_util_InternalJsHashCodeMap$1_this$01);
  this.java_util_InternalJsHashCodeMap$1_chain = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit, $intern_14, 14, 0, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(117, 1, {}, java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V);
_.hasNext__Z = function java_util_InternalJsHashCodeMap$1_hasNext__Z(){
  return java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsHashCodeMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this)) , this.java_util_InternalJsHashCodeMap$1_lastChain = this.java_util_InternalJsHashCodeMap$1_chain , this.java_util_InternalJsHashCodeMap$1_lastEntry = this.java_util_InternalJsHashCodeMap$1_chain[this.java_util_InternalJsHashCodeMap$1_itemIndex++] , this.java_util_InternalJsHashCodeMap$1_lastEntry;
}
;
_.remove__V = function java_util_InternalJsHashCodeMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this.java_util_InternalJsHashCodeMap$1_lastEntry);
  java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_this$01, this.java_util_InternalJsHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_chain) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_lastChain) && this.java_util_InternalJsHashCodeMap$1_chain.length != 1 && --this.java_util_InternalJsHashCodeMap$1_itemIndex;
  this.java_util_InternalJsHashCodeMap$1_lastEntry = null;
}
;
_.java_util_InternalJsHashCodeMap$1_chainIndex = -1;
_.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
_.java_util_InternalJsHashCodeMap$1_lastChain = null;
_.java_util_InternalJsHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/1', 117);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V(){
  java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(115, 74, {}, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  var map_0 = this.java_util_InternalJsHashCodeMap_backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 115);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this$1){
  this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(116, 31, $intern_80, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 14) , java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2()) , java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 116);
function java_util_InternalJsMapFactory_InternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(112, 1, {}, java_util_InternalJsMapFactory_InternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap_InternalJsStringMap__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory', 112);
function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2();
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z(){
  var protoField = $intern_81;
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2(){
  var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0;
  if (Object.create && Object.getOwnPropertyNames && java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z()) {
    return (java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0 = Object.create(null) , java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0[$intern_81] = 42 , Object.getOwnPropertyNames(java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0).length == 0)?new java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V:new java_util_InternalJsMapFactory_InternalJsMapFactory__V;
  }
  return new java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V;
}

var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate;
function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(114, 112, {}, java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V);
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$KeysWorkaroundJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 114);
function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(113, 112, {}, java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$LegacyInternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory/LegacyInternalJsMapFactory', 113);
function java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsStringMap_backingMap);
}

function java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalJsStringMap_backingMap[key];
  oldValue === undefined && java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalJsStringMap_backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.java_util_InternalJsStringMap_backingMap[key];
    java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  }
  return value_0;
}

function java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.java_util_InternalJsStringMap_backingMap[key] = value_0;
}

function java_util_InternalJsStringMap_InternalJsStringMap__V(){
  this.java_util_InternalJsStringMap_backingMap = this.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(61, 1, {}, java_util_InternalJsStringMap_InternalJsStringMap__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap_entries__Ljava_util_Iterator_2(){
  var keys_0;
  keys_0 = this.keys___3Ljava_lang_String_2();
  return new java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this, keys_0);
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[key];
}
;
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap_keys___3Ljava_lang_String_2(){
  return java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
}
;
_.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2 = function java_util_InternalJsStringMap_newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key){
  return new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this, key);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap', 61);
function java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this$0, val$keys){
  this.java_util_InternalJsStringMap$1_this$01 = this$0;
  this.java_util_InternalJsStringMap$1_val$keys2 = val$keys;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(111, 1, {}, java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V);
_.hasNext__Z = function java_util_InternalJsStringMap$1_hasNext__Z(){
  return this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length) , new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this.java_util_InternalJsStringMap$1_this$01, this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last = this.java_util_InternalJsStringMap$1_i++]);
}
;
_.remove__V = function java_util_InternalJsStringMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_InternalJsStringMap$1_last != -1);
  this.java_util_InternalJsStringMap$1_this$01.remove__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last]);
  this.java_util_InternalJsStringMap$1_last = -1;
}
;
_.java_util_InternalJsStringMap$1_i = 0;
_.java_util_InternalJsStringMap$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/1', 111);
function java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this$0, val$key){
  this.java_util_InternalJsStringMap$2_this$01 = this$0;
  this.java_util_InternalJsStringMap$2_val$key2 = val$key;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(73, 278, $intern_79, java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_val$key2;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getValue__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_this$01.get__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return this.java_util_InternalJsStringMap$2_this$01.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2, object);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/2', 73);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(108, 61, {}, java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  for (var key in this.java_util_InternalJsStringMap_backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key.substring(1));
      list.add__Ljava_lang_Object_2Z(entry);
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[':' + key];
}
;
_.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, ':' + key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, ':' + key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapLegacy', 108);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this$1){
  this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(110, 31, $intern_80, java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 14) , java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11, ':' + com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2())) , java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapLegacy/1', 110);
function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(109, 61, {}, java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V);
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_keys___3Ljava_lang_String_2(){
  var keys_0;
  keys_0 = java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
  !(this.java_util_InternalJsStringMap_backingMap[$intern_81] === undefined) && (keys_0[keys_0.length] = $intern_81);
  return keys_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 109);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_78, 'Map/Entry');
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(75, 5, $intern_10, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'NoSuchElementException', 75);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.java_util_Vector_arrayList, o);
}

function java_util_Vector_checkArrayElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V;
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(121, 277, $intern_80);
_.add__ILjava_lang_Object_2V = function java_util_Vector_add__ILjava_lang_Object_2V(index_0, o){
  java_util_Vector_checkArrayElementIndex__IIV(index_0, this.java_util_Vector_arrayList.java_util_ArrayList_array.length + 1);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this.java_util_Vector_arrayList, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_Vector_add__Ljava_lang_Object_2Z(o){
  return java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2Z(this, o);
}
;
_.addAll__Ljava_util_Collection_2Z = function java_util_Vector_addAll__Ljava_util_Collection_2Z(c){
  return java_util_ArrayList_$addAll__Ljava_util_ArrayList_2Ljava_util_Collection_2Z(this.java_util_Vector_arrayList, c);
}
;
_.clear__V = function java_util_Vector_clear__V(){
  this.java_util_Vector_arrayList.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_14, 1, 0, 3, 1);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_Vector_contains__Ljava_lang_Object_2Z(elem){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this.java_util_Vector_arrayList, elem, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Vector_get__ILjava_lang_Object_2(index_0){
  java_util_Vector_checkArrayElementIndex__IIV(index_0, this.java_util_Vector_arrayList.java_util_ArrayList_array.length);
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index_0);
}
;
_.isEmpty__Z = function java_util_Vector_isEmpty__Z(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_array.length == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Vector_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.java_util_Vector_arrayList);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_Vector_remove__ILjava_lang_Object_2(index_0){
  return java_util_Vector_checkArrayElementIndex__IIV(index_0, this.java_util_Vector_arrayList.java_util_ArrayList_array.length) , this.java_util_Vector_arrayList.remove__ILjava_lang_Object_2(index_0);
}
;
_.removeRange__IIV = function java_util_Vector_removeRange__IIV(fromIndex, endIndex){
  java_util_ArrayList_$removeRange__Ljava_util_ArrayList_2IIV(this.java_util_Vector_arrayList, fromIndex, endIndex);
}
;
_.size__I = function java_util_Vector_size__I(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_array.length;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_Vector_toArray___3Ljava_lang_Object_2(){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(this.java_util_Vector_arrayList);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_Vector_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this.java_util_Vector_arrayList, a);
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Vector_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this.java_util_Vector_arrayList);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Vector', 121);
function java_util_Stack_$pop__Ljava_util_Stack_2Ljava_lang_Object_2(this$static){
  var sz;
  sz = this$static.java_util_Vector_arrayList.java_util_ArrayList_array.length;
  if (sz > 0) {
    return java_util_Vector_checkArrayElementIndex__IIV(sz - 1, this$static.java_util_Vector_arrayList.java_util_ArrayList_array.length) , this$static.java_util_Vector_arrayList.remove__ILjava_lang_Object_2(sz - 1);
  }
   else {
    throw new java_util_EmptyStackException_EmptyStackException__V;
  }
}

function java_util_Stack_Stack__V(){
  this.java_util_Vector_arrayList = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(122, 121, $intern_80, java_util_Stack_Stack__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Stack', 122);
var com_google_gwt_lang_ClassLiteralHolder_I_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('int', 'I'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1CollapsedPropertyHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_82, 'CollapsedPropertyHolder', 262), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1JavaClassHierarchySetupUtil_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_82, 'JavaClassHierarchySetupUtil', 264), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_82, 'LongLibBase/LongEmul', null), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1ModuleUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_82, 'ModuleUtils', 267), com_google_gwt_lang_ClassLiteralHolder_J_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('long', 'J'), com_google_gwt_lang_ClassLiteralHolder_C_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('char', 'C'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_78, 'Map/Entry');
var $entry = com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2();
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_it_100046appify_100046examples_100046Examples_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=example-0.js

