var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.emsmobile;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '6D409EEDB40677EE2185A9977972DE43';
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
var $intern_0 = 'object', $intern_1 = 'java.lang', $intern_2 = 'com.google.gwt.core.client', $intern_3 = 'com.github.nmorel.gwtjackson.client', $intern_4 = 'com.github.nmorel.gwtjackson.client.deser', $intern_5 = 'true', $intern_6 = 'com.github.nmorel.gwtjackson.client.deser.bean', $intern_7 = {8:1}, $intern_8 = 'com.github.nmorel.gwtjackson.client.deser.collection', $intern_9 = {3:1, 6:1}, $intern_10 = {3:1, 11:1, 5:1, 6:1}, $intern_11 = 'com.github.nmorel.gwtjackson.client.exception', $intern_12 = {20:1, 3:1, 11:1, 5:1, 6:1}, $intern_13 = 'com.github.nmorel.gwtjackson.client.ser', $intern_14 = {3:1}, $intern_15 = 'com.github.nmorel.gwtjackson.client.ser.bean', $intern_16 = {4:1, 7:1}, $intern_17 = 'Nesting problem.', $intern_18 = 'JsonWriter is closed.', $intern_19 = 'null', $intern_20 = 'Numeric values must be finite, but was ', $intern_21 = 'com.github.nmorel.gwtjackson.client.stream.impl', $intern_22 = '-9223372036854775808', $intern_23 = ' at line ', $intern_24 = ' column ', $intern_25 = 'Expected name', $intern_26 = 65535, $intern_27 = 'Expected an int but was ', $intern_28 = 'Expected a long but was ', $intern_29 = 'Unterminated string', $intern_30 = 524288, $intern_31 = 'Unterminated escape sequence', $intern_32 = 'com.google.gwt.core.client.impl', $intern_33 = 'Error parsing JSON: ', $intern_34 = 'fromIndex: ', $intern_35 = 'com.google.gwt.http.client', $intern_36 = {39:1, 3:1, 11:1, 6:1}, $intern_37 = 'com.google.gwt.json.client', $intern_38 = 4194303, $intern_39 = 1048575, $intern_40 = 4194304, $intern_41 = 17592186044416, $intern_42 = -9223372036854775808, $intern_43 = 'localStorage', $intern_44 = 'class it.appify.examples.emsmobile.model.EmsMobileModel', $intern_45 = 'CSS1Compat', $intern_46 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (', $intern_47 = 'Expect more errors.', $intern_48 = 'it.appify.api', $intern_49 = 'accuracy', $intern_50 = 'altitudeAccuracy', $intern_51 = 'latitude', $intern_52 = 'longitude', $intern_53 = 'GeoOptions', $intern_54 = 'enableHighAccuracy', $intern_55 = 'maximumAge', $intern_56 = 'Geoposition', $intern_57 = 'timestamp', $intern_58 = 'coords', $intern_59 = 'availHeight', $intern_60 = 'availWidth', $intern_61 = 'colorDepth', $intern_62 = 'fullscreen', $intern_63 = 'vehiclesPage', $intern_64 = 'dumpPage', $intern_65 = 'waitModalText', $intern_66 = 'it.appify.app', $intern_67 = 'it.appify.battery', $intern_68 = 'it.appify.examples.emsmobile', $intern_69 = 'it.appify.view', $intern_70 = 'it.appify.storage', $intern_71 = 'EmsMobileModel', $intern_72 = 'gpsStateBtn', $intern_73 = 'fade', $intern_74 = 'it.appify.examples.emsmobile.controller', $intern_75 = 'Inizio Turno', $intern_76 = 'status-idle', $intern_77 = 'it.appify.examples.emsmobile.model', $intern_78 = 'batteryStatus', $intern_79 = 'connectionStatus', $intern_80 = 'screenOrientation', $intern_81 = 'vehicleCode', $intern_82 = 'checkInLabel', $intern_83 = 'name', $intern_84 = 'it.appify.examples.emsmobile.service', $intern_85 = 'status-off', $intern_86 = 'status-on', $intern_87 = 'connectionStateBtn', $intern_88 = 'Stato Connessione', $intern_89 = 'it.appify.geolocation', $intern_90 = 'it.appify.offline', $intern_91 = 'it.appify.screenorientation', $intern_92 = 'undefined', $intern_93 = 'page loaded ', $intern_94 = 'For input string: "', $intern_95 = 1073741824, $intern_96 = 'java.util', $intern_97 = {24:1, 53:1}, $intern_98 = {16:1}, $intern_99 = {3:1, 24:1, 14:1}, $intern_100 = {3:1, 24:1, 53:1}, $intern_101 = '__proto__', $intern_102 = 'com.google.gwt.lang';
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
com_google_gwt_lang_Cast_stringCastMap = {3:1, 332:1, 49:1, 2:1};
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(78, 1, {}, java_lang_Class_Class__V);
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
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Object', 1), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptObject$', 0), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Class', 78);
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
      result = com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer = this$static.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2()) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer), reader, ctx, (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT));
      com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endObject__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
      return result;
    }
     else {
      return com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer = this$static.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2()) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_deserializer), reader, ctx, (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT));
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
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, 3, 5, '}');
    }
     else {
      com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V((!this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer && (this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer = this$static.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2()) , this$static.com_github_nmorel_gwtjackson_client_AbstractObjectMapper_serializer), writer, value_0, ctx, (com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT));
    }
    return writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out.java_lang_AbstractStringBuilder_string;
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 71)) {
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(59, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1AbstractObjectMapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'AbstractObjectMapper', 59);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(324, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonMappingContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonMappingContext', 324);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext_$newJsonReader__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2(input_0){
  var reader;
  reader = new com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NonBufferedJsonReader__Ljava_lang_String_2V(input_0);
  reader.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lenient = true;
  return reader;
}

function com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV(failOnUnknownProperties, wrapExceptions){
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_failOnUnknownProperties = failOnUnknownProperties;
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_unwrapRootValue = false;
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_acceptSingleValueAsArray = false;
  this.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_wrapExceptions = wrapExceptions;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(164, 324, {}, com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV);
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_acceptSingleValueAsArray = false;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_failOnUnknownProperties = false;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_unwrapRootValue = false;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_wrapExceptions = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonDeserializationContext', 164);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(this$static){
  return new com_github_nmorel_gwtjackson_client_JsonDeserializationContext_JsonDeserializationContext__ZZZZZV(this$static.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_failOnUnknownProperties, this$static.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_wrapExceptions);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(165, 1, {});
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_failOnUnknownProperties = true;
_.com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_wrapExceptions = true;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext$Builder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonDeserializationContext/Builder', 165);
function com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(72, 165, {}, com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializationContext$DefaultBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonDeserializationContext/DefaultBuilder', 72);
function com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(this$static, reader, ctx, params){
  if ((com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
    return com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$skipValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader) , null;
  }
  return this$static.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(326, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonDeserializer', 326);
function com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V(){
  com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT = new com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V;
}

function com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(169, 1, {}, com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_JsonDeserializerParameters__V);
var com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonDeserializerParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonDeserializerParameters', 169);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV(serializeNulls, writeEmptyJsonArrays, wrapExceptions){
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls = serializeNulls;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_indent = false;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapRootValue = false;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeEmptyJsonArrays = writeEmptyJsonArrays;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeSingleElemArraysUnwrapped = false;
  this.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapExceptions = wrapExceptions;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(162, 324, {}, com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV);
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_indent = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapExceptions = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_wrapRootValue = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeEmptyJsonArrays = false;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeSingleElemArraysUnwrapped = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonSerializationContext', 162);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(this$static){
  return new com_github_nmorel_gwtjackson_client_JsonSerializationContext_JsonSerializationContext__ZZZZZZZZZZZZV(this$static.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_serializeNulls, this$static.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_writeEmptyJsonArrays, this$static.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_wrapExceptions);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(163, 1, {});
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_serializeNulls = true;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_wrapExceptions = true;
_.com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_writeEmptyJsonArrays = true;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext$Builder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonSerializationContext/Builder', 163);
function com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(60, 163, {}, com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializationContext$DefaultBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonSerializationContext/DefaultBuilder', 60);
function com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this$static, writer, value_0, ctx, params){
  null == value_0?ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_serializeNulls?com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$nullValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer):(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null?(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = null):writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null && (writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = null) , writer):this$static.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(325, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonSerializer', 325);
function com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V(){
  com_github_nmorel_gwtjackson_client_JsonSerializerParameters_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT = new com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V;
}

function com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(167, 1, {}, com_github_nmorel_gwtjackson_client_JsonSerializerParameters_JsonSerializerParameters__V);
var com_github_nmorel_gwtjackson_client_JsonSerializerParameters_DEFAULT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1JsonSerializerParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JsonSerializerParameters', 167);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(331, 326, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'BaseNumberJsonDeserializer', 331);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(292, 331, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_BaseNumberJsonDeserializer$DoubleJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return new java_lang_Double_Double__DV(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextDouble__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2D(reader));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$DoubleJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'BaseNumberJsonDeserializer/DoubleJsonDeserializer', 292);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(293, 331, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_BaseNumberJsonDeserializer$IntegerJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return (com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)?java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextInt__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(reader)):java_lang_Integer_valueOf__ILjava_lang_Integer_2(java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader)));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$IntegerJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'BaseNumberJsonDeserializer/IntegerJsonDeserializer', 293);
function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(294, 331, {}, com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_BaseNumberJsonDeserializer$LongJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextLong__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2J(reader));
}
;
var com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BaseNumberJsonDeserializer$LongJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'BaseNumberJsonDeserializer/LongJsonDeserializer', 294);
function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(291, 326, {}, com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_BooleanJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  var com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0;
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0 = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader) , (com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN) == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextBoolean__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Z(reader)?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_5, com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader))?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER == com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Boolean_2_token_0?(java_lang_Boolean_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextInt__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(reader) == 1?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE):null;
}
;
var com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1BooleanJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'BooleanJsonDeserializer', 291);
function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE = new com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V;
}

function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(260, 326, {}, com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_StringJsonDeserializer__V);
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$nextString__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Ljava_lang_String_2(reader);
}
;
var com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1StringJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'StringJsonDeserializer', 260);
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
      bufferedProperty = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, bufferedProperty$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(bufferedProperty$iterator)) , bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_last = bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bufferedProperty$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 16));
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(35, 326, {});
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1AbstractBeanJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbstractBeanJsonDeserializer', 35);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(327, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1HasDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HasDeserializer', 327);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(328, 327, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1HasDeserializerAndParameters_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HasDeserializerAndParameters', 328);
function com_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_deser_bean_BeanPropertyDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(this$static, reader, bean, ctx){
  this$static.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2((!this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer && (this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer = this$static.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2()) , this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializer_deserializer), reader, ctx, (!this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters && (this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters = (com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_$clinit__V() , com_github_nmorel_gwtjackson_client_JsonDeserializerParameters_DEFAULT)) , this$static.com_github_nmorel_gwtjackson_client_deser_bean_HasDeserializerAndParameters_parameters)), ctx);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(8, 328, $intern_7);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1BeanPropertyDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'BeanPropertyDeserializer', 8);
function com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(instance, bufferedProperties){
  this.com_github_nmorel_gwtjackson_client_deser_bean_Instance_instance = instance;
  this.com_github_nmorel_gwtjackson_client_deser_bean_Instance_bufferedProperties = bufferedProperties;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(37, 1, {}, com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1bean_1Instance_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Instance', 37);
function com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static[':' + key] = value_0;
}

function com_github_nmorel_gwtjackson_client_deser_collection_BaseIterableJsonDeserializer_BaseIterableJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V(deserializer){
  if (!deserializer) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V("deserializer can't be null");
  }
  this.com_github_nmorel_gwtjackson_client_deser_collection_BaseIterableJsonDeserializer_deserializer = deserializer;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(261, 326, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1collection_1BaseIterableJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'BaseIterableJsonDeserializer', 261);
function com_github_nmorel_gwtjackson_client_deser_collection_BaseCollectionJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_collection_BaseCollectionJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_util_Collection_2(this$static, reader, ctx, params){
  var element, result;
  if ((com_github_nmorel_gwtjackson_client_stream_JsonToken_$clinit__V() , com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY) == com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
    result = new java_util_ArrayList_ArrayList__V;
    com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$beginArray__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
    while (com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY != com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader)) {
      element = com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(this$static.com_github_nmorel_gwtjackson_client_deser_collection_BaseIterableJsonDeserializer_deserializer, reader, ctx, params);
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result.java_util_ArrayList_array, result.java_util_ArrayList_array.length, element);
    }
    com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endArray__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(reader);
    return result;
  }
   else if (ctx.com_github_nmorel_gwtjackson_client_JsonDeserializationContext_acceptSingleValueAsArray) {
    result = new java_util_ArrayList_ArrayList__V;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(result, com_github_nmorel_gwtjackson_client_JsonDeserializer_$deserialize__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(this$static.com_github_nmorel_gwtjackson_client_deser_collection_BaseIterableJsonDeserializer_deserializer, reader, ctx, params));
    return result;
  }
   else {
    throw new com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V('Cannot deserialize a java.util.Collection out of ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(reader) + ' token');
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(262, 261, {});
_.doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2 = function com_github_nmorel_gwtjackson_client_deser_collection_BaseCollectionJsonDeserializer_doDeserialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_lang_Object_2(reader, ctx, params){
  return com_github_nmorel_gwtjackson_client_deser_collection_BaseCollectionJsonDeserializer_$doDeserialize__Lcom_github_nmorel_gwtjackson_client_deser_collection_BaseCollectionJsonDeserializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializerParameters_2Ljava_util_Collection_2(this, reader, ctx, params);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1collection_1BaseCollectionJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'BaseCollectionJsonDeserializer', 262);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(263, 262, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1collection_1BaseListJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'BaseListJsonDeserializer', 263);
function com_github_nmorel_gwtjackson_client_deser_collection_ListJsonDeserializer_ListJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V(deserializer){
  com_github_nmorel_gwtjackson_client_deser_collection_BaseIterableJsonDeserializer_BaseIterableJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V.call(this, deserializer);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(93, 263, {}, com_github_nmorel_gwtjackson_client_deser_collection_ListJsonDeserializer_ListJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1deser_1collection_1ListJsonDeserializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'ListJsonDeserializer', 93);
function java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static, cause){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZLjava_lang_Object_2V(!this$static.java_lang_Throwable_cause);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(cause != this$static, 'Self-causation not permitted');
  this$static.java_lang_Throwable_cause = cause;
  return this$static;
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Throwable', 6);
function java_lang_Exception_Exception__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(11, 6, {3:1, 11:1, 6:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Exception', 11);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_Throwable__V.call(this);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(cause);
  this.java_lang_Throwable_cause = cause;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(5, 11, $intern_10, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'RuntimeException', 5);
function com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V(cause){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(70, 5, $intern_10);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonMappingException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonMappingException', 70);
function com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_Throwable_2V(cause){
  com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(20, 70, $intern_12, com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V, com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonDeserializationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonDeserializationException', 20);
function com_github_nmorel_gwtjackson_client_exception_JsonSerializationException_JsonSerializationException__Ljava_lang_Throwable_2V(cause){
  com_github_nmorel_gwtjackson_client_exception_JsonMappingException_JsonMappingException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(71, 70, {71:1, 3:1, 11:1, 5:1, 6:1}, com_github_nmorel_gwtjackson_client_exception_JsonSerializationException_JsonSerializationException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1exception_1JsonSerializationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'JsonSerializationException', 71);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(330, 325, {});
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, value_0);
}
;
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  this.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 44), ctx, params);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer', 330);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(280, 330, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_BaseNumberJsonSerializer$DoubleJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2DLcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 19).java_lang_Double_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$DoubleJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/DoubleJsonSerializer', 280);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(281, 330, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_BaseNumberJsonSerializer$IntegerJsonSerializer__V);
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$IntegerJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/IntegerJsonSerializer', 281);
function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(282, 330, {}, com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_BaseNumberJsonSerializer$LongJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Number_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2JLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 28).java_lang_Long_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BaseNumberJsonSerializer$LongJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BaseNumberJsonSerializer/LongJsonSerializer', 282);
function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(279, 325, {}, com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_BooleanJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZLcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 31).java_lang_Boolean_value);
}
;
var com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1BooleanJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'BooleanJsonSerializer', 279);
function com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_$doSerialize__Lcom_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_util_Collection_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this$static, writer, values, ctx, params){
  var value_0, value$iterator;
  if (values.isEmpty__Z()) {
    if (ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeEmptyJsonArrays) {
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(writer);
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(writer, true);
      com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize++, 1);
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '[');
      com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, 1, 2, ']');
    }
     else {
      writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null?(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName = null):writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null && (writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName = null);
    }
    return;
  }
  if (ctx.com_github_nmorel_gwtjackson_client_JsonSerializationContext_writeSingleElemArraysUnwrapped && values.size__I() == 1) {
    com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this$static.com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_serializer, writer, values.iterator__Ljava_util_Iterator_2().next__Ljava_lang_Object_2(), ctx, params);
  }
   else {
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(writer);
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(writer, true);
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stack, writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize++, 1);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(writer.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, '[');
    for (value$iterator = values.iterator__Ljava_util_Iterator_2(); value$iterator.hasNext__Z();) {
      value_0 = value$iterator.next__Ljava_lang_Object_2();
      com_github_nmorel_gwtjackson_client_JsonSerializer_$serialize__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this$static.com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_serializer, writer, value_0, ctx, params);
    }
    com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, 1, 2, ']');
  }
}

function com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_CollectionJsonSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2V(serializer){
  if (!serializer) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('serializer cannot be null');
  }
  this.com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_serializer = serializer;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(91, 325, {}, com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_CollectionJsonSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, values, ctx, params){
  com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_$doSerialize__Lcom_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_util_Collection_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(this, writer, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(values, 24), ctx, params);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1CollectionJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'CollectionJsonSerializer', 91);
function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V(){
  com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE = new com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V;
}

function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(236, 325, {}, com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_StringJsonSerializer__V);
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$value__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1StringJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'StringJsonSerializer', 236);
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
  com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(writer, 3, 5, '}');
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(34, 325, {});
_.doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V = function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_doSerialize__Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2V(writer, value_0, ctx, params){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$serializeInternally__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_JsonSerializerParameters_2Lcom_github_nmorel_gwtjackson_client_ser_bean_IdentitySerializationInfo_2Lcom_github_nmorel_gwtjackson_client_ser_bean_TypeSerializationInfo_2V(com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_$getSerializer__Lcom_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_2Lcom_github_nmorel_gwtjackson_client_stream_JsonWriter_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Lcom_github_nmorel_gwtjackson_client_ser_bean_InternalSerializer_2(this, value_0), writer, value_0, ctx);
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 0, 0, 1);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1AbstractBeanJsonSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'AbstractBeanJsonSerializer', 34);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(7, 1, {7:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1HasSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'HasSerializer', 7);
function com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V(propertyName){
  this.com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_propertyName = propertyName;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(4, 7, $intern_16);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'BeanPropertySerializer', 4);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(63, 1, {3:1, 49:1, 63:1});
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Enum', 63);
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
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1JsonToken_12_1classLit, 1), $intern_14, 23, 0, [com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME, com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING, com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER, com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN, com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(23, 63, {23:1, 3:1, 49:1, 63:1}, com_github_nmorel_gwtjackson_client_stream_JsonToken_JsonToken__Ljava_lang_String_2IV);
var com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_BEGIN_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_BOOLEAN, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1ARRAY, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1DOCUMENT, com_github_nmorel_gwtjackson_client_stream_JsonToken_END_1OBJECT, com_github_nmorel_gwtjackson_client_stream_JsonToken_NAME, com_github_nmorel_gwtjackson_client_stream_JsonToken_NULL, com_github_nmorel_gwtjackson_client_stream_JsonToken_NUMBER, com_github_nmorel_gwtjackson_client_stream_JsonToken_STRING;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1JsonToken_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.github.nmorel.gwtjackson.client.stream', 'JsonToken', 23, com_github_nmorel_gwtjackson_client_stream_JsonToken_values___3Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2);
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

function com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$close__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2IILjava_lang_String_2Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2(this$static, empty, nonempty, closeBracket){
  var context;
  context = com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2I(this$static);
  if (context != nonempty && context != empty) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_17);
  }
  if (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName != null || this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName != null) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Dangling name: ' + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName == null?this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredName:this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_deferredUnescapeName));
  }
  --this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize;
  context == nonempty && com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$newline__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, closeBracket);
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
  return com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$writeDeferredName__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2V(this$static) , com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_$beforeValue__Lcom_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_2ZV(this$static, false) , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_out, value_0?$intern_5:'false') , this$static;
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(166, 1, {}, com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_FastJsonWriter__Ljava_lang_StringBuilder_2V);
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_lenient = false;
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_separator = ':';
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_serializeNulls = true;
_.com_github_nmorel_gwtjackson_client_stream_impl_FastJsonWriter_stackSize = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1FastJsonWriter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'FastJsonWriter', 166);
function com_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_MalformedJsonException__Ljava_lang_String_2V(msg){
  com_github_nmorel_gwtjackson_client_exception_JsonDeserializationException_JsonDeserializationException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(209, 20, $intern_12, com_github_nmorel_gwtjackson_client_stream_impl_MalformedJsonException_MalformedJsonException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1MalformedJsonException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'MalformedJsonException', 209);
function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$clinit__V(){
  var java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NON_1EXECUTE_1PREFIX = (java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0 = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, $intern_14, 0, 5, 7, 1) , java_lang_String_$getChars__Ljava_lang_String_2II_3CIV(java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0, 0) , java_lang_String_$toCharArray__Ljava_lang_String_2_3C_charArr_0);
  new java_math_BigInteger_BigInteger__Ljava_lang_String_2V($intern_22);
  new java_math_BigInteger_BigInteger__Ljava_lang_String_2V('9223372036854775807');
}

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$beginArray__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 3) {
    com_google_gwt_core_client_JsArrayInteger_$set__Lcom_google_gwt_core_client_JsArrayInteger_2IIV(this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stack, this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize++, 1);
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected BEGIN_ARRAY but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
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

function com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$endArray__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2V(this$static){
  var p;
  p = this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked;
  p == 0 && (p = com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$doPeek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2I(this$static));
  if (p == 4) {
    --this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_stackSize;
    this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_peeked = 0;
  }
   else {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Expected END_ARRAY but was ' + com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_$peek__Lcom_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_2Lcom_github_nmorel_gwtjackson_client_stream_JsonToken_2(this$static) + $intern_23 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineNumber + 1) + $intern_24 + (this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_pos - this$static.com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_lineStart + 1));
  }
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
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 13))
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
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 13))
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
    keyword = $intern_5;
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(168, 1, {}, com_github_nmorel_gwtjackson_client_stream_impl_NonBufferedJsonReader_NonBufferedJsonReader__Ljava_lang_String_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1stream_1impl_1NonBufferedJsonReader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'NonBufferedJsonReader', 168);
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(145, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Duration', 145);
function com_google_gwt_core_client_GWT_isScript__Z(){
  return true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(97, 5, $intern_10);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'JavaScriptExceptionBase', 97);
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
  this.java_lang_Throwable_cause = null;
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(29, 97, {29:1, 3:1, 11:1, 5:1, 6:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this) , this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptException', 29);
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

function com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return s;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  !com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2());
  return com_google_gwt_core_client_JsonUtils_escapeTable;
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
    return com_google_gwt_core_client_JsonUtils_throwIllegalArgumentException__Ljava_lang_String_2Ljava_lang_String_2V($intern_33 + e, json);
  }
}

function com_google_gwt_core_client_JsonUtils_throwIllegalArgumentException__Ljava_lang_String_2Ljava_lang_String_2V(message, data_0){
  throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message + '\n' + data_0);
}

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(305, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Scheduler', 305);
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
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 6)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 29)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 29).getThrown__Ljava_lang_Object_2():e);
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

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedPeriodImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  var intervalId = $wnd.setInterval(function(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    !com_google_gwt_core_client_GWT_isScript__Z() && (ret = ret == true);
    !ret && $wnd.clearInterval(intervalId);
  }
  , delayMs);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(136, 305, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl', 136);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(137, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl/Flusher', 137);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(138, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'SchedulerImpl/Rescuer', 138);
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
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(316, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/Collector', 316);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(98, 316, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorLegacy', 98);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  Error.stackTraceLimit = 64;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(317, 316, {});
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorModern', 317);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(99, 317, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_32, 'StackTraceCreator/CollectorModernNoSourceMap', 99);
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
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_34 + start_0 + ' < 0');
  }
  if (end > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('toIndex: ' + end + ' > size ' + size_0);
  }
  if (start_0 > end) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_34 + start_0 + ' > toIndex: ' + end);
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

function com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZLjava_lang_Object_2V(expression){
  if (!expression) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Can't overwrite cause");
  }
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static){
  var xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  xhr.abort();
}

function com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  var response, xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  response = new com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  it_appify_offline_OnlineChecker$1_$onResponseReceived__Lit_appify_offline_OnlineChecker$1_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(callback, response);
}

function com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this$static){
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static);
  it_appify_offline_OnlineChecker$1_$onError__Lit_appify_offline_OnlineChecker$1_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static.com_google_gwt_http_client_Request_callback, new com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(this$static.com_google_gwt_http_client_Request_timeoutMillis));
}

function com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, timeoutMillis, callback){
  this.com_google_gwt_http_client_Request_timer = new com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this);
  if (!xmlHttpRequest) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (!callback) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (timeoutMillis < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__V;
  }
  this.com_google_gwt_http_client_Request_callback = callback;
  this.com_google_gwt_http_client_Request_timeoutMillis = timeoutMillis;
  this.com_google_gwt_http_client_Request_xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_http_client_Request_timer, timeoutMillis);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(217, 1, {}, com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V);
_.com_google_gwt_http_client_Request_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'Request', 217);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative');
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client_Timer$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(202, 1, {});
_.package_private$com_google_gwt_user_client_Timer$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this.com_google_gwt_http_client_Request$1_this$01);
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.user.client', 'Timer', 202);
function com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this$0){
  this.com_google_gwt_http_client_Request$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(220, 202, {}, com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'Request/1', 220);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(329, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Response_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'Response', 329);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(218, 329, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1ResponseImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'ResponseImpl', 218);
function com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V($anonymous0){
  this.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest = $anonymous0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(219, 218, {}, com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$RequestImplIE8And9$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'Request/RequestImplIE8And9/1', 219);
function com_google_gwt_http_client_RequestBuilder_$clinit__V(){
  com_google_gwt_http_client_RequestBuilder_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('DELETE');
  com_google_gwt_http_client_RequestBuilder_GET = new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('GET');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('HEAD');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('POST');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('PUT');
}

function com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_httpMethod, this$static.com_google_gwt_http_client_RequestBuilder_url);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 29)) {
      e = $e0;
      requestPermissionException = new com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(this$static.com_google_gwt_http_client_RequestBuilder_url);
      java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(requestPermissionException, new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
      throw requestPermissionException;
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.com_google_gwt_http_client_RequestBuilder_includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis, callback);
  com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(xmlHttpRequest, new com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e1, 29)) {
      e = $e1;
      throw new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2());
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
  }
  return request;
}

function com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', callback);
  this$static.com_google_gwt_http_client_RequestBuilder_callback = callback;
}

function com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V(httpMethod, url_0){
  com_google_gwt_http_client_RequestBuilder_$clinit__V();
  com_google_gwt_http_client_RequestBuilder_RequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V.call(this, !httpMethod?null:httpMethod.com_google_gwt_http_client_RequestBuilder$Method_name, url_0);
}

function com_google_gwt_http_client_RequestBuilder_RequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(httpMethod, url_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('httpMethod', httpMethod);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('url', url_0);
  this.com_google_gwt_http_client_RequestBuilder_httpMethod = httpMethod;
  this.com_google_gwt_http_client_RequestBuilder_url = url_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(89, 1, {}, com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V);
_.com_google_gwt_http_client_RequestBuilder_includeCredentials = false;
_.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 0;
var com_google_gwt_http_client_RequestBuilder_GET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestBuilder', 89);
function com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(val$request, val$callback){
  this.com_google_gwt_http_client_RequestBuilder$1_val$request2 = val$request;
  this.com_google_gwt_http_client_RequestBuilder$1_val$callback3 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(216, 1, {}, com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V);
_.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V = function com_google_gwt_http_client_RequestBuilder$1_onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr){
  if (xhr.readyState == 4) {
    com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
    com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this.com_google_gwt_http_client_RequestBuilder$1_val$request2, this.com_google_gwt_http_client_RequestBuilder$1_val$callback3);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestBuilder/1', 216);
function com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V(name_0){
  this.com_google_gwt_http_client_RequestBuilder$Method_name = name_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(52, 1, {}, com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_http_client_RequestBuilder$Method_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_http_client_RequestBuilder$Method_name;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestBuilder/Method', 52);
function com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(39, 11, $intern_36, com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestException', 39);
function com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(278, 39, $intern_36, com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestPermissionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestPermissionException', 278);
function com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(timeoutMillis){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(304, 39, $intern_36, com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestTimeoutException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'RequestTimeoutException', 304);
function com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V(name_0, value_0){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0);
  if (0 == java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(value_0).length) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(name_0 + ' cannot be empty');
  }
}

function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null');
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(323, 1, {});
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONValue_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONValue', 323);
function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(74, 323, {74:1}, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 74)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONArray_jsArray == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 74).com_google_gwt_json_client_JSONArray_jsArray;
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONArray', 74);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(88, 323, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONBoolean', 88);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(cause){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_Throwable_2V.call(this, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(73, 5, $intern_10, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONException', 73);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(208, 323, {}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_19;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONNull', 208);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(61, 323, {61:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 61)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 61).com_google_gwt_json_client_JSONNumber_value;
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONNumber', 61);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(48, 323, {48:1}, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 48)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONObject_jsObject == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 48).com_google_gwt_json_client_JSONObject_jsObject;
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
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONObject', 48);
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

function com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_33 + e);
    }
  }
   else {
    json = com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_33 + e);
    }
  }
  var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  var ex;
  if (jsonString == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (jsonString.length == 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('empty argument');
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString, true);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 29)) {
      ex = $e0;
      throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(ex);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V(message){
  throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(62, 323, {62:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 62)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 62).com_google_gwt_json_client_JSONString_value);
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONString_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'JSONString', 62);
function com_google_gwt_lang_Array_clone___3Ljava_lang_Object_2_3Ljava_lang_Object_2(array){
  return com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(array, array.length);
}

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
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 29)) {
    jse = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 29);
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
  a0 = value_0 & $intern_38;
  a1 = value_0 >> 22 & $intern_38;
  a2 = value_0 < 0?$intern_39:0;
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
  neg0 = ~a.l + 1 & $intern_38;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_38;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_39;
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
  return a.l + a.m * $intern_40 + a.h * $intern_41;
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
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum0 & $intern_38);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum1 & $intern_38);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum2 & $intern_39);
  return true;
}

var com_google_gwt_lang_LongLibBase_remainder;
function com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_38, m:sum1 & $intern_38, h:sum2 & $intern_39};
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
  if (value_0 < $intern_42) {
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
  if (value_0 >= $intern_41) {
    a2 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_41);
    value_0 -= a2 * $intern_41;
  }
  a1 = 0;
  if (value_0 >= $intern_40) {
    a1 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_40);
    value_0 -= a1 * $intern_40;
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
    com_google_gwt_lang_LongLib_boxedValues == null && (com_google_gwt_lang_LongLib_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit, $intern_14, 336, 256, 0, 1));
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
  c00 = p0 & $intern_38;
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
  c0 &= $intern_38;
  c2 += c1 >> 22;
  c1 &= $intern_38;
  c2 &= $intern_39;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(c0, c1, c2);
}

function com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_38;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_38;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_39;
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
  return {l:res0 & $intern_38, m:res1 & $intern_38, h:res2 & $intern_39};
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
    res2 = negative?$intern_39:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_39:0;
    res1 = negative?$intern_38:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_38, m:res1 & $intern_38, h:res2 & $intern_39};
}

function com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_39;
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
  return {l:res0 & $intern_38, m:res1 & $intern_38, h:res2 & $intern_39};
}

function com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_38, m:sum1 & $intern_38, h:sum2 & $intern_39};
}

function com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return $intern_42;
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, com_google_gwt_lang_LongLib$Const_ZERO)) {
    return -com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  return a.l + a.m * $intern_40 + a.h * $intern_41;
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
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2($intern_38, $intern_38, 524287);
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, $intern_30);
  com_google_gwt_lang_LongLib$Const_ONE = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(2);
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(0);
}

var com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_ONE, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(o){
  return o.java_lang_Object_typeMarker$ === com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
}

function com_google_gwt_lang_it_100046appify_100046examples_100046EmsMobile_1_1EntryMethodHolder_init__V(){
  var it_appify_examples_emsmobile_EmsMobileEntryPoint_$onModuleLoad__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V_app_0, it_appify_examples_emsmobile_EmsMobileEntryPoint_$createInitialState__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2_appState_1;
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  it_appify_examples_emsmobile_EmsMobileEntryPoint_$onModuleLoad__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V_app_0 = new it_appify_examples_emsmobile_EmsMobileAppImpl_EmsMobileAppImpl__V;
  it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2Lit_appify_app_WebApp$AppListener_2V(it_appify_examples_emsmobile_EmsMobileEntryPoint_$onModuleLoad__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V_app_0, (it_appify_examples_emsmobile_EmsMobileEntryPoint_$createInitialState__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2_appState_1 = new it_appify_examples_emsmobile_model_EmsMobileModel_EmsMobileModel__V , it_appify_examples_emsmobile_EmsMobileEntryPoint_$createInitialState__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2_appState_1.it_appify_examples_emsmobile_model_EmsMobileModel_dumpUrl = 'http://www.luigibifulco.it/blog/' , it_appify_examples_emsmobile_model_EmsMobileModel_$setBarStatus__Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_examples_emsmobile_model_BarStatus_2V(it_appify_examples_emsmobile_EmsMobileEntryPoint_$createInitialState__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2_appState_1, new it_appify_examples_emsmobile_model_BarStatus_BarStatus__V) , it_appify_examples_emsmobile_EmsMobileEntryPoint_$createInitialState__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2_appState_1), new it_appify_examples_emsmobile_EmsMobileEntryPoint$1_EmsMobileEntryPoint$1__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V);
}

function com_google_gwt_storage_client_Storage_$setItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, data_0){
  com_google_gwt_storage_client_StorageImplNonNativeEvents_$setItem__Lcom_google_gwt_storage_client_StorageImplNonNativeEvents_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.com_google_gwt_storage_client_Storage_storage, data_0);
}

function com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V(){
  this.com_google_gwt_storage_client_Storage_storage = $intern_43;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(198, 1, {}, com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V);
var com_google_gwt_storage_client_Storage_localStorage;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1storage_1client_1Storage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.storage.client', 'Storage', 198);
function com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V(){
  com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_storage_client_Storage$StorageSupportDetector_localStorageSupported = com_google_gwt_storage_client_Storage$StorageSupportDetector_checkStorageSupport__Ljava_lang_String_2Z($intern_43);
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
function com_google_gwt_storage_client_StorageImplNonNativeEvents_$setItem__Lcom_google_gwt_storage_client_StorageImplNonNativeEvents_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V(storage, data_0){
  $wnd[storage].getItem($intern_44);
  $wnd[storage].setItem($intern_44, data_0);
}

function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_14, 2, 4, [$intern_45]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_45, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie9', runtimeValue)) {
    throw new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue);
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(64, 6, $intern_9);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Error', 64);
function java_lang_AssertionError_AssertionError__V(){
  java_lang_Throwable_Throwable__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(17, 64, $intern_9, java_lang_AssertionError_AssertionError__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AssertionError', 17);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, '' + ($intern_46 + runtimeValue + ').\n' + $intern_47), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_46 + runtimeValue + ').\n' + $intern_47, 6)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_46 + runtimeValue + ').\n' + $intern_47, 6):null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(95, 17, $intern_9, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 95);
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

function com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(_this);
  }
  );
}

function it_appify_api_BatteryStatus_$setCharging__Lit_appify_api_BatteryStatus_2ZV(this$static, charging){
  this$static.it_appify_api_BatteryStatus_charging = charging;
}

function it_appify_api_BatteryStatus_$setLevel__Lit_appify_api_BatteryStatus_2DV(this$static, level){
  this$static.it_appify_api_BatteryStatus_level = level;
}

function it_appify_api_BatteryStatus_BatteryStatus__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(40, 1, {40:1, 3:1}, it_appify_api_BatteryStatus_BatteryStatus__V);
_.toString__Ljava_lang_String_2$ = function it_appify_api_BatteryStatus_toString__Ljava_lang_String_2(){
  return 'BatteryStatus [charging=' + this.it_appify_api_BatteryStatus_charging + ', level=' + this.it_appify_api_BatteryStatus_level + ']';
}
;
_.it_appify_api_BatteryStatus_charging = false;
_.it_appify_api_BatteryStatus_level = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatus', 40);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(241, 35, {}, it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonDeserializerImpl', 241);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_BatteryStatusBeanJsonDeserializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(242, 1, {}, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_BatteryStatusBeanJsonDeserializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_BatteryStatus_BatteryStatus__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonDeserializerImpl/1', 242);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_BatteryStatusBeanJsonDeserializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(243, 8, $intern_7, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_BatteryStatusBeanJsonDeserializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_BatteryStatus_$setCharging__Lit_appify_api_BatteryStatus_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 40), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 31).java_lang_Boolean_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonDeserializerImpl/2', 243);
function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_BatteryStatusBeanJsonDeserializerImpl$3__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(244, 8, $intern_7, it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_BatteryStatusBeanJsonDeserializerImpl$3__Lit_appify_api_BatteryStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_BatteryStatusBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_BatteryStatus_$setLevel__Lit_appify_api_BatteryStatus_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 40), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 19).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonDeserializerImpl/3', 244);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(221, 34, {}, it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonSerializerImpl', 221);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl$1_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_BatteryStatus_charging?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_BatteryStatusBeanJsonSerializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'charging');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(222, 4, $intern_16, it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_BatteryStatusBeanJsonSerializerImpl$1__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl$1_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 40));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonSerializerImpl/1', 222);
function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_BatteryStatusBeanJsonSerializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'level');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(223, 4, $intern_16, it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_BatteryStatusBeanJsonSerializerImpl$2__Lit_appify_api_BatteryStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 40).it_appify_api_BatteryStatus_level);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_BatteryStatusBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1BatteryStatusBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'BatteryStatusBeanJsonSerializerImpl/2', 223);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(15, 1, {15:1, 3:1}, it_appify_api_Coordinates_Coordinates__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Coordinates_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'Coordinates', 15);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(295, 35, {}, it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Coordinates_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_49, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'altitude', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_50, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'heading', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_51, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_52, new it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'speed', new it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl', 295);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(296, 1, {}, it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_CoordinatesBeanJsonDeserializerImpl$1__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Coordinates_Coordinates__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/1', 296);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(297, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_CoordinatesBeanJsonDeserializerImpl$2__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAccuracy__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/2', 297);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(298, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_CoordinatesBeanJsonDeserializerImpl$3__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAltitude__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/3', 298);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(299, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_CoordinatesBeanJsonDeserializerImpl$4__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setAltitudeAccuracy__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/4', 299);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(300, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_CoordinatesBeanJsonDeserializerImpl$5__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setHeading__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/5', 300);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(301, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_CoordinatesBeanJsonDeserializerImpl$6__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setLatitude__Lit_appify_api_Coordinates_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 19).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/6', 301);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(302, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_CoordinatesBeanJsonDeserializerImpl$7__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$7_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setLongitude__Lit_appify_api_Coordinates_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 19).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/7', 302);
function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(303, 8, $intern_7, it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_CoordinatesBeanJsonDeserializerImpl$8__Lit_appify_api_CoordinatesBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_CoordinatesBeanJsonDeserializerImpl$8_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Coordinates_$setSpeed__Lit_appify_api_Coordinates_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonDeserializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonDeserializerImpl/8', 303);
function it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(283, 34, {}, it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl', 283);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_CoordinatesBeanJsonSerializerImpl$1__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_49);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(284, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$1_CoordinatesBeanJsonSerializerImpl$1__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_accuracy);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/1', 284);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_CoordinatesBeanJsonSerializerImpl$2__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'altitude');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(285, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$2_CoordinatesBeanJsonSerializerImpl$2__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_altitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/2', 285);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_CoordinatesBeanJsonSerializerImpl$3__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_50);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(286, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$3_CoordinatesBeanJsonSerializerImpl$3__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_altitudeAccuracy);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/3', 286);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_CoordinatesBeanJsonSerializerImpl$4__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'heading');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(287, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$4_CoordinatesBeanJsonSerializerImpl$4__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_heading);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/4', 287);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_CoordinatesBeanJsonSerializerImpl$5__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_51);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(288, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$5_CoordinatesBeanJsonSerializerImpl$5__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_latitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/5', 288);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_CoordinatesBeanJsonSerializerImpl$6__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_52);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(289, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$6_CoordinatesBeanJsonSerializerImpl$6__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_longitude);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$6_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/6', 289);
function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_CoordinatesBeanJsonSerializerImpl$7__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'speed');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(290, 4, $intern_16, it_appify_api_CoordinatesBeanJsonSerializerImpl$7_CoordinatesBeanJsonSerializerImpl$7__Lit_appify_api_CoordinatesBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 15).it_appify_api_Coordinates_speed);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_CoordinatesBeanJsonSerializerImpl$7_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1CoordinatesBeanJsonSerializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'CoordinatesBeanJsonSerializerImpl/7', 290);
function it_appify_api_GeoOptions_$setEnableHighAccuracy__Lit_appify_api_GeoOptions_2ZV(this$static, enableHighAccuracy){
  this$static.it_appify_api_GeoOptions_enableHighAccuracy = enableHighAccuracy;
}

function it_appify_api_GeoOptions_$setMaximumAge__Lit_appify_api_GeoOptions_2JV(this$static, maximumAge){
  this$static.it_appify_api_GeoOptions_maximumAge = maximumAge;
}

function it_appify_api_GeoOptions_$setTimeout__Lit_appify_api_GeoOptions_2JV(this$static, timeout){
  this$static.it_appify_api_GeoOptions_timeout = timeout;
}

function it_appify_api_GeoOptions_GeoOptions__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(36, 1, {36:1, 3:1}, it_appify_api_GeoOptions_GeoOptions__V);
_.it_appify_api_GeoOptions_enableHighAccuracy = false;
_.it_appify_api_GeoOptions_maximumAge = {l:0, m:0, h:0};
_.it_appify_api_GeoOptions_timeout = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptions_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, $intern_53, 36);
function it_appify_api_GeoOptionsBeanJsonDeserializerImpl_GeoOptionsBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(269, 35, {}, it_appify_api_GeoOptionsBeanJsonDeserializerImpl_GeoOptionsBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptions_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_54, new it_appify_api_GeoOptionsBeanJsonDeserializerImpl$2_GeoOptionsBeanJsonDeserializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'timeout', new it_appify_api_GeoOptionsBeanJsonDeserializerImpl$3_GeoOptionsBeanJsonDeserializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_55, new it_appify_api_GeoOptionsBeanJsonDeserializerImpl$4_GeoOptionsBeanJsonDeserializerImpl$4__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_GeoOptionsBeanJsonDeserializerImpl$1_GeoOptionsBeanJsonDeserializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonDeserializerImpl', 269);
function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$1_GeoOptionsBeanJsonDeserializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(270, 1, {}, it_appify_api_GeoOptionsBeanJsonDeserializerImpl$1_GeoOptionsBeanJsonDeserializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_GeoOptions_GeoOptions__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonDeserializerImpl/1', 270);
function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$2_GeoOptionsBeanJsonDeserializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(271, 8, $intern_7, it_appify_api_GeoOptionsBeanJsonDeserializerImpl$2_GeoOptionsBeanJsonDeserializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_GeoOptions_$setEnableHighAccuracy__Lit_appify_api_GeoOptions_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 31).java_lang_Boolean_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonDeserializerImpl/2', 271);
function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$3_GeoOptionsBeanJsonDeserializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(272, 8, $intern_7, it_appify_api_GeoOptionsBeanJsonDeserializerImpl$3_GeoOptionsBeanJsonDeserializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_GeoOptions_$setTimeout__Lit_appify_api_GeoOptions_2JV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 28).java_lang_Long_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonDeserializerImpl/3', 272);
function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$4_GeoOptionsBeanJsonDeserializerImpl$4__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(273, 8, $intern_7, it_appify_api_GeoOptionsBeanJsonDeserializerImpl$4_GeoOptionsBeanJsonDeserializerImpl$4__Lit_appify_api_GeoOptionsBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeoOptionsBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_GeoOptions_$setMaximumAge__Lit_appify_api_GeoOptions_2JV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 28).java_lang_Long_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonDeserializerImpl/4', 273);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(274, 34, {}, it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonSerializerImpl', 274);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl$1_2Lit_appify_api_GeoOptions_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_GeoOptions_enableHighAccuracy?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_GeoOptionsBeanJsonSerializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_54);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(275, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_GeoOptionsBeanJsonSerializerImpl$1__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_$getValue__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl$1_2Lit_appify_api_GeoOptions_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonSerializerImpl/1', 275);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_GeoOptionsBeanJsonSerializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'timeout');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(276, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_GeoOptionsBeanJsonSerializerImpl$2__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36).it_appify_api_GeoOptions_timeout);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonSerializerImpl/2', 276);
function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_GeoOptionsBeanJsonSerializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_55);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(277, 4, $intern_16, it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_GeoOptionsBeanJsonSerializerImpl$3__Lit_appify_api_GeoOptionsBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 36).it_appify_api_GeoOptions_maximumAge);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeoOptionsBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeoOptionsBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeoOptionsBeanJsonSerializerImpl/3', 277);
function it_appify_api_Geoposition_$setTimestamp__Lit_appify_api_Geoposition_2JV(this$static, timestamp){
  this$static.it_appify_api_Geoposition_timestamp = timestamp;
}

function it_appify_api_Geoposition_Geoposition__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(41, 1, {41:1, 3:1}, it_appify_api_Geoposition_Geoposition__V);
_.toString__Ljava_lang_String_2$ = function it_appify_api_Geoposition_toString__Ljava_lang_String_2(){
  return 'Geoposition [timestamp=' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this.it_appify_api_Geoposition_timestamp) + ', coords=' + this.it_appify_api_Geoposition_coords + ']';
}
;
_.it_appify_api_Geoposition_timestamp = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Geoposition_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, $intern_56, 41);
function it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(92, 35, {}, it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Geoposition_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_57, new it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_58, new it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonDeserializerImpl', 92);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(245, 1, {}, it_appify_api_GeopositionBeanJsonDeserializerImpl$1_GeopositionBeanJsonDeserializerImpl$1__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Geoposition_Geoposition__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonDeserializerImpl/1', 245);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(246, 8, $intern_7, it_appify_api_GeopositionBeanJsonDeserializerImpl$2_GeopositionBeanJsonDeserializerImpl$2__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$LongJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeopositionBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Geoposition_$setTimestamp__Lit_appify_api_Geoposition_2JV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 41), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 28).java_lang_Long_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonDeserializerImpl/2', 246);
function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_GeopositionBeanJsonDeserializerImpl$3_2Lit_appify_api_Geoposition_2Lit_appify_api_Coordinates_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_api_Geoposition_coords = value_0;
}

function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(247, 8, $intern_7, it_appify_api_GeopositionBeanJsonDeserializerImpl$3_GeopositionBeanJsonDeserializerImpl$3__Lit_appify_api_GeopositionBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_CoordinatesBeanJsonDeserializerImpl_CoordinatesBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_GeopositionBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_GeopositionBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_GeopositionBeanJsonDeserializerImpl$3_2Lit_appify_api_Geoposition_2Lit_appify_api_Coordinates_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 41), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 15));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonDeserializerImpl/3', 247);
function it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(90, 34, {}, it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonSerializerImpl', 90);
function it_appify_api_GeopositionBeanJsonSerializerImpl$1_GeopositionBeanJsonSerializerImpl$1__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_57);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(224, 4, $intern_16, it_appify_api_GeopositionBeanJsonSerializerImpl$1_GeopositionBeanJsonSerializerImpl$1__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 41).it_appify_api_Geoposition_timestamp);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$LongJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonSerializerImpl/1', 224);
function it_appify_api_GeopositionBeanJsonSerializerImpl$2_GeopositionBeanJsonSerializerImpl$2__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_58);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(225, 4, $intern_16, it_appify_api_GeopositionBeanJsonSerializerImpl$2_GeopositionBeanJsonSerializerImpl$2__Lit_appify_api_GeopositionBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 41).it_appify_api_Geoposition_coords;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_GeopositionBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_CoordinatesBeanJsonSerializerImpl_CoordinatesBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1GeopositionBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'GeopositionBeanJsonSerializerImpl/2', 225);
function it_appify_api_HasModel$VMKey_HasModel$VMKey__Ljava_lang_String_2Ljava_lang_String_2V(pageId, viewId){
  this.it_appify_api_HasModel$VMKey_pageId = pageId;
  this.it_appify_api_HasModel$VMKey_viewId = viewId;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(55, 1, {55:1}, it_appify_api_HasModel$VMKey_HasModel$VMKey__Ljava_lang_String_2Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function it_appify_api_HasModel$VMKey_equals__Ljava_lang_Object_2Z(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1HasModel$VMKey_12_1classLit != java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(obj))
    return false;
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 55);
  if (this.it_appify_api_HasModel$VMKey_pageId == null) {
    if (other.it_appify_api_HasModel$VMKey_pageId != null)
      return false;
  }
   else if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.it_appify_api_HasModel$VMKey_pageId, other.it_appify_api_HasModel$VMKey_pageId))
    return false;
  if (this.it_appify_api_HasModel$VMKey_viewId == null) {
    if (other.it_appify_api_HasModel$VMKey_viewId != null)
      return false;
  }
   else if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.it_appify_api_HasModel$VMKey_viewId, other.it_appify_api_HasModel$VMKey_viewId))
    return false;
  return true;
}
;
_.hashCode__I$ = function it_appify_api_HasModel$VMKey_hashCode__I(){
  var result;
  result = 31 + (this.it_appify_api_HasModel$VMKey_pageId == null?0:java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.it_appify_api_HasModel$VMKey_pageId));
  result = 31 * result + (this.it_appify_api_HasModel$VMKey_viewId == null?0:java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.it_appify_api_HasModel$VMKey_viewId));
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1HasModel$VMKey_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'HasModel/VMKey', 55);
function it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(56, 1, {56:1}, it_appify_api_HasViewHandlers$ViewHandlerHolder_HasViewHandlers$ViewHandlerHolder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1HasViewHandlers$ViewHandlerHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'HasViewHandlers/ViewHandlerHolder', 56);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(21, 1, {21:1, 3:1}, it_appify_api_Screen_Screen__V);
_.it_appify_api_Screen_availHeight = 0;
_.it_appify_api_Screen_availLeft = 0;
_.it_appify_api_Screen_availTop = 0;
_.it_appify_api_Screen_availWidth = 0;
_.it_appify_api_Screen_colorDepth = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Screen_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'Screen', 21);
function it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(248, 35, {}, it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1Screen_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_59, new it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'availLeft', new it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'availTop', new it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_60, new it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_61, new it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl', 248);
function it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(249, 1, {}, it_appify_api_ScreenBeanJsonDeserializerImpl$1_ScreenBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_Screen_Screen__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/1', 249);
function it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(250, 8, $intern_7, it_appify_api_ScreenBeanJsonDeserializerImpl$2_ScreenBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailHeight__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/2', 250);
function it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(251, 8, $intern_7, it_appify_api_ScreenBeanJsonDeserializerImpl$3_ScreenBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailLeft__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/3', 251);
function it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(252, 8, $intern_7, it_appify_api_ScreenBeanJsonDeserializerImpl$4_ScreenBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailTop__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/4', 252);
function it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(253, 8, $intern_7, it_appify_api_ScreenBeanJsonDeserializerImpl$5_ScreenBeanJsonDeserializerImpl$5__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setAvailWidth__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/5', 253);
function it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(254, 8, $intern_7, it_appify_api_ScreenBeanJsonDeserializerImpl$6_ScreenBeanJsonDeserializerImpl$6__Lit_appify_api_ScreenBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$IntegerJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_Screen_$setColorDepth__Lit_appify_api_Screen_2IV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 18).java_lang_Integer_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonDeserializerImpl/6', 254);
function it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(226, 34, {}, it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl', 226);
function it_appify_api_ScreenBeanJsonSerializerImpl$1_ScreenBeanJsonSerializerImpl$1__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_59);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(227, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$1_ScreenBeanJsonSerializerImpl$1__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21).it_appify_api_Screen_availHeight);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl/1', 227);
function it_appify_api_ScreenBeanJsonSerializerImpl$2_ScreenBeanJsonSerializerImpl$2__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'availLeft');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(228, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$2_ScreenBeanJsonSerializerImpl$2__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21).it_appify_api_Screen_availLeft);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl/2', 228);
function it_appify_api_ScreenBeanJsonSerializerImpl$3_ScreenBeanJsonSerializerImpl$3__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'availTop');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(229, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$3_ScreenBeanJsonSerializerImpl$3__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21).it_appify_api_Screen_availTop);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl/3', 229);
function it_appify_api_ScreenBeanJsonSerializerImpl$4_ScreenBeanJsonSerializerImpl$4__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_60);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(230, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$4_ScreenBeanJsonSerializerImpl$4__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21).it_appify_api_Screen_availWidth);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl/4', 230);
function it_appify_api_ScreenBeanJsonSerializerImpl$5_ScreenBeanJsonSerializerImpl$5__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_61);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(231, 4, $intern_16, it_appify_api_ScreenBeanJsonSerializerImpl$5_ScreenBeanJsonSerializerImpl$5__Lit_appify_api_ScreenBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 21).it_appify_api_Screen_colorDepth);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$IntegerJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenBeanJsonSerializerImpl/5', 231);
function it_appify_api_ScreenOrientation_$setAngle__Lit_appify_api_ScreenOrientation_2DV(this$static, angle){
  this$static.it_appify_api_ScreenOrientation_angle = angle;
}

function it_appify_api_ScreenOrientation_$setFullscreen__Lit_appify_api_ScreenOrientation_2ZV(this$static, fullscreen){
  this$static.it_appify_api_ScreenOrientation_fullscreen = fullscreen;
}

function it_appify_api_ScreenOrientation_ScreenOrientation__V(){
  this.it_appify_api_ScreenOrientation_angle = 0;
  this.it_appify_api_ScreenOrientation_type = 'any';
  this.it_appify_api_ScreenOrientation_fullscreen = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(38, 1, {38:1, 3:1}, it_appify_api_ScreenOrientation_ScreenOrientation__V);
_.it_appify_api_ScreenOrientation_angle = 0;
_.it_appify_api_ScreenOrientation_fullscreen = false;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientation', 38);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(255, 35, {}, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientation_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'angle', new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'type', new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_62, new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonDeserializerImpl', 255);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(256, 1, {}, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_ScreenOrientationBeanJsonDeserializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_api_ScreenOrientation_ScreenOrientation__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonDeserializerImpl/1', 256);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(257, 8, $intern_7, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_ScreenOrientationBeanJsonDeserializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BaseNumberJsonDeserializer$DoubleJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientation_$setAngle__Lit_appify_api_ScreenOrientation_2DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 19).java_lang_Double_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonDeserializerImpl/2', 257);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_2Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_api_ScreenOrientation_type = value_0;
}

function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(258, 8, $intern_7, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_ScreenOrientationBeanJsonDeserializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_$setValue__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl$3_2Lit_appify_api_ScreenOrientation_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonDeserializerImpl/3', 258);
function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(259, 8, $intern_7, it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_ScreenOrientationBeanJsonDeserializerImpl$4__Lit_appify_api_ScreenOrientationBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_BooleanJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_api_ScreenOrientationBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_api_ScreenOrientation_$setFullscreen__Lit_appify_api_ScreenOrientation_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 31).java_lang_Boolean_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonDeserializerImpl/4', 259);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(232, 34, {}, it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonSerializerImpl', 232);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_ScreenOrientationBeanJsonSerializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'angle');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(233, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_ScreenOrientationBeanJsonSerializerImpl$1__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return new java_lang_Double_Double__DV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38).it_appify_api_ScreenOrientation_angle);
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BaseNumberJsonSerializer$DoubleJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonSerializerImpl/1', 233);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_ScreenOrientationBeanJsonSerializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'type');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(234, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_ScreenOrientationBeanJsonSerializerImpl$2__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38).it_appify_api_ScreenOrientation_type;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonSerializerImpl/2', 234);
function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_$getValue__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(bean){
  return java_lang_Boolean_$clinit__V() , bean.it_appify_api_ScreenOrientation_fullscreen?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_ScreenOrientationBeanJsonSerializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_62);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(235, 4, $intern_16, it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_ScreenOrientationBeanJsonSerializerImpl$3__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_$getValue__Lit_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Boolean_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 38));
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_api_ScreenOrientationBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_BooleanJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1api_1ScreenOrientationBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_48, 'ScreenOrientationBeanJsonSerializerImpl/3', 235);
function it_appify_app_AbstractWebApp_$back__Lit_appify_app_AbstractWebApp_2V(this$static){
  var pageId, state;
  pageId = com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_Stack_$pop__Ljava_util_Stack_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageStack));
  state = it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_modelView);
  it_appify_view_PageLoader_$setCurrentTransition__Lit_appify_view_PageLoader_2Ljava_lang_String_2V(this$static.it_appify_app_AbstractWebApp_loader, 'slide-right');
  it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static.it_appify_app_AbstractWebApp_loader, pageId, state, null);
}

function it_appify_app_AbstractWebApp_$bindControllerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_app_ControllerHolder_2V(this$static, pageId, holder){
  var holders;
  holders = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageControllers, pageId), 14);
  !holders && (holders = new java_util_ArrayList_ArrayList__V);
  holders.add__Ljava_lang_Object_2Z(holder);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageControllers, pageId, holders);
}

function it_appify_app_AbstractWebApp_$bindElementToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, pageId, viewId){
  var els;
  els = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewElements, pageId), 14);
  !els && (els = new java_util_ArrayList_ArrayList__V);
  els.add__Ljava_lang_Object_2Z(viewId);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewElements, pageId, els);
}

function it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, pageId, holder){
  var holders;
  holders = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, pageId), 14);
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

function it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static){
  var page;
  page = it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager);
  return page;
}

function it_appify_app_AbstractWebApp_$getViewFragment__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, viewId){
  return it_appify_view_WebPage_$getElementInPage__Lit_appify_view_WebPage_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager), viewId);
}

function it_appify_app_AbstractWebApp_$moveTo__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2V(this$static){
  if (!it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager)) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Main page not started  maybe you need to call start app first??');
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager).it_appify_view_WebPage_pageElement.id, $intern_63)) {
    return;
  }
  java_util_Vector_$add__Ljava_util_Vector_2Ljava_lang_Object_2Z(this$static.it_appify_app_AbstractWebApp_pageStack, it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager).it_appify_view_WebPage_pageElement.id);
  it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static.it_appify_app_AbstractWebApp_loader, $intern_63, it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_modelView), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, $intern_63), 14));
}

function it_appify_app_AbstractWebApp_$startApp__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static, initialState){
  var handlers, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceBatteryStatusService_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceConnectionStateService_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceGeolocationService_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerDumpController_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_refreshDumpBtn_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMainPageNavigationController_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_checkInBtn_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMenuController_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_showMenuBtn_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_backBtn_0, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_closeWaitModalBtn_0;
  if (this$static.it_appify_app_AbstractWebApp_mainPage == null || !this$static.it_appify_app_AbstractWebApp_mainPage.length) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('main page cannot be null or empty');
  }
  if (!it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static.it_appify_app_AbstractWebApp_pageManager)) {
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceBatteryStatusService_0 = new it_appify_examples_emsmobile_service_BatteryStatusService_BatteryStatusService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_emsmobile_EmsMobileAppImpl$11_EmsMobileAppImpl$11__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceBatteryStatusService_0));
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceConnectionStateService_0 = new it_appify_examples_emsmobile_service_ConnectionStateService_ConnectionStateService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_emsmobile_EmsMobileAppImpl$12_EmsMobileAppImpl$12__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceConnectionStateService_0));
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceGeolocationService_0 = new it_appify_examples_emsmobile_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindService__Lit_appify_app_AbstractWebApp_2Lit_appify_api_Service_2V(this$static, new it_appify_examples_emsmobile_EmsMobileAppImpl$13_EmsMobileAppImpl$13__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeServices__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_serviceGeolocationService_0));
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerDumpController_0 = new it_appify_examples_emsmobile_controller_DumpController_DumpController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindElementToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, $intern_64, 'dumpFrame');
    it_appify_app_AbstractWebApp_$bindControllerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_app_ControllerHolder_2V(this$static, $intern_64, new it_appify_examples_emsmobile_EmsMobileAppImpl$2_EmsMobileAppImpl$2__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_DumpController_2V(this$static, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerDumpController_0));
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_refreshDumpBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('refreshDumpBtn', new it_appify_examples_emsmobile_EmsMobileAppImpl$3_EmsMobileAppImpl$3__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerDumpController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_64, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_refreshDumpBtn_0);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMainPageNavigationController_0 = new it_appify_examples_emsmobile_controller_MainPageNavigationController_MainPageNavigationController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_checkInBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('checkInBtn', new it_appify_examples_emsmobile_EmsMobileAppImpl$4_EmsMobileAppImpl$4__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMainPageNavigationController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_64, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_checkInBtn_0);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMenuController_0 = new it_appify_examples_emsmobile_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_showMenuBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('showMenuBtn', new it_appify_examples_emsmobile_EmsMobileAppImpl$5_EmsMobileAppImpl$5__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerMenuController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_64, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holderdumpPage_showMenuBtn_0);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0 = new it_appify_examples_emsmobile_controller_VehicleListController_VehicleListController__Lit_appify_app_WebApp_2V(this$static);
    it_appify_app_AbstractWebApp_$bindElementToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, $intern_63, $intern_65);
    it_appify_app_AbstractWebApp_$bindControllerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_app_ControllerHolder_2V(this$static, $intern_63, new it_appify_examples_emsmobile_EmsMobileAppImpl$6_EmsMobileAppImpl$6__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_VehicleListController_2V(this$static, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0));
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_backBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('backBtn', new it_appify_examples_emsmobile_EmsMobileAppImpl$7_EmsMobileAppImpl$7__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_63, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_backBtn_0);
    it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_closeWaitModalBtn_0 = it_appify_app_AbstractWebApp_$createViewHandler__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2('closeWaitModalBtn', new it_appify_examples_emsmobile_EmsMobileAppImpl$8_EmsMobileAppImpl$8__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0));
    it_appify_app_AbstractWebApp_$bindHandlerToPage__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandlerHolder_2V(this$static, $intern_63, it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_holdervehiclesPage_closeWaitModalBtn_0);
    it_appify_view_VueJsViewModel_$addViewModelHandler__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_view_ViewModelHandlerHolder_2V(this$static.it_appify_app_AbstractWebApp_modelView, new it_appify_examples_emsmobile_EmsMobileAppImpl$10_EmsMobileAppImpl$10__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Lit_appify_api_HasModel$ViewModelHandler_2V(new it_appify_examples_emsmobile_EmsMobileAppImpl$9_EmsMobileAppImpl$9__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(it_appify_examples_emsmobile_EmsMobileAppImpl_$initializeControllers__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_controllerVehicleListController_0)));
    handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_pageViewHandlers, this$static.it_appify_app_AbstractWebApp_mainPage), 14);
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
  var it_appify_examples_emsmobile_EmsMobileAppImpl_$storeCurrentAppState__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_model_0;
  it_appify_view_VueJsViewModel_$updateModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2V(this$static.it_appify_app_AbstractWebApp_modelView, state);
  new it_appify_examples_emsmobile_EmsMobileAppImpl$14_EmsMobileAppImpl$14__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V;
  it_appify_examples_emsmobile_EmsMobileAppImpl_$storeCurrentAppState__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_model_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(new it_appify_examples_emsmobile_EmsMobileAppImpl$14_EmsMobileAppImpl$14__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V, it_appify_examples_emsmobile_EmsMobileAppImpl_$storeCurrentAppState__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V_model_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(104, 1, {});
_.it_appify_app_AbstractWebApp_firstLoad = true;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1app_1AbstractWebApp_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AbstractWebApp', 104);
function it_appify_app_AbstractWebApp$1_$onPageReady__Lit_appify_app_AbstractWebApp$1_2Lit_appify_api_Page_2V(this$static, page){
  var s, s$iterator;
  'AbstractWebApp onPageReady: ' + this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_mainPage + ' - ' + page.it_appify_view_WebPage_pageElement.id + ' - ' + this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_firstLoad;
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(page.it_appify_view_WebPage_pageElement.id, this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_mainPage) && this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_firstLoad) {
    this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_firstLoad = false;
    if (!!this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services && this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services.java_util_ArrayList_array.length > 0) {
      for (s$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_services); s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        s = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_last = s$iterator.java_util_AbstractList$IteratorImpl_i++), 94));
        try {
          s.start__V();
        }
         catch ($e0) {
          $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
          if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 11)) {
            'error while starting service: ' + s.java_lang_Object__1_1_1clazz$;
          }
           else 
            throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        }
      }
    }
    !!this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_callback && it_appify_examples_emsmobile_EmsMobileEntryPoint$1_$onAppStart__Lit_appify_examples_emsmobile_EmsMobileEntryPoint$1_2Lit_appify_app_WebApp_2V(this$static.it_appify_app_AbstractWebApp$1_this$01);
  }
}

function it_appify_app_AbstractWebApp$1_$onPageShow__Lit_appify_app_AbstractWebApp$1_2Lit_appify_api_Page_2V(this$static, page){
  var controllerHolder, controllerHolder$iterator, controllers;
  it_appify_view_PageLoader_$setCurrentTransition__Lit_appify_view_PageLoader_2Ljava_lang_String_2V(this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_loader, null);
  controllers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_app_AbstractWebApp$1_this$01.it_appify_app_AbstractWebApp_pageControllers, page.it_appify_view_WebPage_pageElement.id), 14);
  if (controllers) {
    for (controllerHolder$iterator = controllers.iterator__Ljava_util_Iterator_2(); controllerHolder$iterator.hasNext__Z();) {
      controllerHolder = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(controllerHolder$iterator.next__Ljava_lang_Object_2(), 47);
      controllerHolder.injectViewElements__V();
    }
  }
}

function it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V(this$0){
  this.it_appify_app_AbstractWebApp$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(122, 1, {}, it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1app_1AbstractWebApp$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'AbstractWebApp/1', 122);
function it_appify_app_ControllerHolder_ControllerHolder__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2V(controller){
  this.it_appify_app_ControllerHolder_controller = controller;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(47, 1, {47:1});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1app_1ControllerHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ControllerHolder', 47);
function it_appify_app_ServiceProvider_createGeoLocationService__ZIJLit_appify_api_Geolocation_2(){
  var options;
  if (!it_appify_app_ServiceProvider_geolocation) {
    options = new it_appify_api_GeoOptions_GeoOptions__V;
    options.it_appify_api_GeoOptions_enableHighAccuracy = true;
    options.it_appify_api_GeoOptions_maximumAge = {l:5000, m:0, h:0};
    options.it_appify_api_GeoOptions_timeout = {l:10000, m:0, h:0};
    it_appify_app_ServiceProvider_geolocation = new it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V(options);
  }
  return it_appify_app_ServiceProvider_geolocation;
}

var it_appify_app_ServiceProvider_applicationCache, it_appify_app_ServiceProvider_battery, it_appify_app_ServiceProvider_geolocation, it_appify_app_ServiceProvider_webScreenOrientation;
function it_appify_battery_AdvancedJSBattery_$getBatteryStatus__Lit_appify_battery_AdvancedJSBattery_2Lit_appify_api_Battery$BatteryStatusCallback_2V(this$static, callback){
  it_appify_battery_BatteryJsObject_$_1getBatteryInfo__Lit_appify_battery_BatteryJsObject_2Lit_appify_battery_BatteryJsObject$BatteryCallback_2D(this$static.it_appify_battery_AdvancedJSBattery_batteryObj, new it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V(callback));
}

function it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V(){
  this.it_appify_battery_AdvancedJSBattery_batteryObj = new it_appify_battery_BatteryJsObject_BatteryJsObject__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(204, 1, {}, it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1AdvancedJSBattery_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'AdvancedJSBattery', 204);
function it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V(val$callback){
  this.it_appify_battery_AdvancedJSBattery$1_val$callback2 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(205, 1, {}, it_appify_battery_AdvancedJSBattery$1_AdvancedJSBattery$1__Lit_appify_battery_AdvancedJSBattery_2V);
_.onBatteryInfo__DZV = function it_appify_battery_AdvancedJSBattery$1_onBatteryInfo__DZV(level, charging){
  var status_0;
  status_0 = new it_appify_api_BatteryStatus_BatteryStatus__V;
  status_0.it_appify_api_BatteryStatus_charging = charging;
  status_0.it_appify_api_BatteryStatus_level = level;
  it_appify_examples_emsmobile_service_BatteryStatusService$2_$onBatteryStatus__Lit_appify_examples_emsmobile_service_BatteryStatusService$2_2Lit_appify_api_BatteryStatus_2V(this.it_appify_battery_AdvancedJSBattery$1_val$callback2, status_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1AdvancedJSBattery$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'AdvancedJSBattery/1', 205);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(206, 1, {}, it_appify_battery_BatteryJsObject_BatteryJsObject__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1battery_1BatteryJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'BatteryJsObject', 206);
function it_appify_examples_emsmobile_EmsMobileAppImpl_EmsMobileAppImpl__V(){
  this.it_appify_app_AbstractWebApp_pl = new it_appify_app_AbstractWebApp$1_AbstractWebApp$1__Lit_appify_app_AbstractWebApp_2V(this);
  this.it_appify_app_AbstractWebApp_mainPage = $intern_64;
  this.it_appify_app_AbstractWebApp_services = new java_util_ArrayList_ArrayList__V;
  this.it_appify_app_AbstractWebApp_pageViewHandlers = new java_util_HashMap_HashMap__V;
  this.it_appify_app_AbstractWebApp_pageViewElements = new java_util_HashMap_HashMap__V;
  this.it_appify_app_AbstractWebApp_pageControllers = new java_util_HashMap_HashMap__V;
  this.it_appify_app_AbstractWebApp_pageStack = new java_util_Stack_Stack__V;
  this.it_appify_app_AbstractWebApp_pageManager = new it_appify_view_AppJsPageManager_AppJsPageManager__V;
  $wnd.App.setDefaultTransition('slide-left');
  this.it_appify_app_AbstractWebApp_modelView = new it_appify_examples_emsmobile_EmsMobileAppImpl$1_EmsMobileAppImpl$1__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V;
  this.it_appify_app_AbstractWebApp_loader = new it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V(this.it_appify_app_AbstractWebApp_pageManager, this.it_appify_app_AbstractWebApp_modelView, this.it_appify_app_AbstractWebApp_pl);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(105, 104, {}, it_appify_examples_emsmobile_EmsMobileAppImpl_EmsMobileAppImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl', 105);
function it_appify_view_VueJsViewModel_$_1create__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, viewId, json){
  var that = this$static;
  $wnd.vm = new $wnd.Vue({el:'#' + viewId, data:json, methods:{onData:function(item_0, e){
    console.log('on data...');
    that.onDataReceived__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(item_0.$el, item_0.$data, e);
  }
  }});
  return $wnd.vm;
}

function it_appify_view_VueJsViewModel_$addViewModelHandler__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_view_ViewModelHandlerHolder_2V(this$static, holder){
  var key;
  key = new it_appify_api_HasModel$VMKey_HasModel$VMKey__Ljava_lang_String_2Ljava_lang_String_2V($intern_63, 'vehicleList');
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_view_VueJsViewModel_handlers, key, holder);
}

function it_appify_view_VueJsViewModel_$bindModelToView__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, viewId, instance){
  var jsObj, json;
  this$static.it_appify_view_VueJsViewModel_model = instance;
  json = (!this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper && (this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper, instance, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  it_appify_view_VueJsViewModel_$_1create__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, viewId, jsObj);
}

function it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static){
  var dummyM, it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0, it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0;
  if (this$static.it_appify_view_VueJsViewModel_model == null) {
    dummyM = (!this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper && (this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper, '{}', com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)));
    return dummyM;
  }
  this$static.it_appify_view_VueJsViewModel_model = (it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0 = $wnd.vm.$data , it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0 = new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jso_0) , !this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper && (this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper, com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(it_appify_view_VueJsViewModel_$getModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2_jsonObj_0), com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)));
  return this$static.it_appify_view_VueJsViewModel_model;
}

function it_appify_view_VueJsViewModel_$getViewId__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2(){
  var e;
  e = $wnd.vm.$el;
  return e.id;
}

function it_appify_view_VueJsViewModel_$updateModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2V(this$static, model){
  var jsObj, json;
  json = (!this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper && (this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$1_mapper, model, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  $wnd.vm.$data = jsObj;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(106, 1, {});
_.onDataReceived__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_VueJsViewModel_onDataReceived__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(view, model, event_0){
  var e, gwtEvent, holder, key, modelJson, o;
  e = view;
  modelJson = new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(model);
  gwtEvent = event_0;
  key = new it_appify_api_HasModel$VMKey_HasModel$VMKey__Ljava_lang_String_2Ljava_lang_String_2V(it_appify_view_VueJsViewModel_$getViewId__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2(), com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(e).id);
  holder = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_VueJsViewModel_handlers, key), 54);
  if (holder) {
    o = (!holder.it_appify_examples_emsmobile_EmsMobileAppImpl$10_mapper && (holder.it_appify_examples_emsmobile_EmsMobileAppImpl$10_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperItemImpl_EmsMobileAppImpl_1ObjectMapperItemImpl__V) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$read__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_lang_Object_2(holder.it_appify_examples_emsmobile_EmsMobileAppImpl$10_mapper, com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(modelJson), com_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2(new com_github_nmorel_gwtjackson_client_JsonDeserializationContext$DefaultBuilder_JsonDeserializationContext$DefaultBuilder__V)), 3));
    it_appify_examples_emsmobile_EmsMobileAppImpl$9_$onEvent__Lit_appify_examples_emsmobile_EmsMobileAppImpl$9_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_model_Item_2V(holder.it_appify_view_ViewModelHandlerHolder_handler, (gwtEvent.type , it_appify_view_VueJsViewModel_$getViewId__Lit_appify_view_VueJsViewModel_2Ljava_lang_String_2() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(e).id , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 25)));
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1VueJsViewModel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'VueJsViewModel', 106);
function it_appify_examples_emsmobile_EmsMobileAppImpl$1_EmsMobileAppImpl$1__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(){
  this.it_appify_view_VueJsViewModel_handlers = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(107, 106, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$1_EmsMobileAppImpl$1__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/1', 107);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(54, 1, {54:1});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1ViewModelHandlerHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'ViewModelHandlerHolder', 54);
function it_appify_examples_emsmobile_EmsMobileAppImpl$10_EmsMobileAppImpl$10__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Lit_appify_api_HasModel$ViewModelHandler_2V($anonymous0){
  this.it_appify_view_ViewModelHandlerHolder_handler = $anonymous0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(116, 54, {54:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$10_EmsMobileAppImpl$10__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Lit_appify_api_HasModel$ViewModelHandler_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/10', 116);
function it_appify_examples_emsmobile_EmsMobileAppImpl$11_EmsMobileAppImpl$11__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$serviceBatteryStatusService){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$11_val$serviceBatteryStatusService2 = val$serviceBatteryStatusService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(117, 1, {94:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$11_EmsMobileAppImpl$11__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.start__V = function it_appify_examples_emsmobile_EmsMobileAppImpl$11_start__V(){
  it_appify_examples_emsmobile_service_BatteryStatusService_$startBatteryMonitor__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$11_val$serviceBatteryStatusService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/11', 117);
function it_appify_examples_emsmobile_EmsMobileAppImpl$12_EmsMobileAppImpl$12__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$serviceConnectionStateService){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$12_val$serviceConnectionStateService2 = val$serviceConnectionStateService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(118, 1, {94:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$12_EmsMobileAppImpl$12__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.start__V = function it_appify_examples_emsmobile_EmsMobileAppImpl$12_start__V(){
  it_appify_examples_emsmobile_service_ConnectionStateService_$startCheckConnectionState__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$12_val$serviceConnectionStateService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$12_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/12', 118);
function it_appify_examples_emsmobile_EmsMobileAppImpl$13_EmsMobileAppImpl$13__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$serviceGeolocationService){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$13_val$serviceGeolocationService2 = val$serviceGeolocationService;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(119, 1, {94:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$13_EmsMobileAppImpl$13__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.start__V = function it_appify_examples_emsmobile_EmsMobileAppImpl$13_start__V(){
  it_appify_examples_emsmobile_service_GeolocationService_$startGeolocationService__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$13_val$serviceGeolocationService2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$13_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/13', 119);
function it_appify_storage_AbstractStorage_$store__Lit_appify_storage_AbstractStorage_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, model){
  var data_0;
  data_0 = (!this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$14_mapper && (this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$14_mapper = new it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V) , com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$14_mapper, model, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V)));
  com_google_gwt_storage_client_Storage_$setItem__Lcom_google_gwt_storage_client_Storage_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.it_appify_storage_AbstractStorage_storage, data_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(120, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1storage_1AbstractStorage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_70, 'AbstractStorage', 120);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(121, 120, {});
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1storage_1LocalStorage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_70, 'LocalStorage', 121);
function it_appify_examples_emsmobile_EmsMobileAppImpl$14_EmsMobileAppImpl$14__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(){
  this.it_appify_storage_AbstractStorage_storage = (!com_google_gwt_storage_client_Storage_localStorage && (com_google_gwt_storage_client_Storage$StorageSupportDetector_$clinit__V() , com_google_gwt_storage_client_Storage$StorageSupportDetector_localStorageSupported) && (com_google_gwt_storage_client_Storage_localStorage = new com_google_gwt_storage_client_Storage_Storage__Ljava_lang_String_2V) , com_google_gwt_storage_client_Storage_localStorage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(80, 121, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$14_EmsMobileAppImpl$14__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$14_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/14', 80);
function it_appify_examples_emsmobile_EmsMobileAppImpl$2_EmsMobileAppImpl$2__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_DumpController_2V(this$0, $anonymous3){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$2_this$01 = this$0;
  it_appify_app_ControllerHolder_ControllerHolder__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2V.call(this, $anonymous3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(108, 47, {47:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$2_EmsMobileAppImpl$2__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_DumpController_2V);
_.injectViewElements__V = function it_appify_examples_emsmobile_EmsMobileAppImpl$2_injectViewElements__V(){
  it_appify_examples_emsmobile_controller_DumpController_$setDumpFrameElement__Lit_appify_examples_emsmobile_controller_DumpController_2Lcom_google_gwt_dom_client_Element_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.it_appify_app_ControllerHolder_controller, 68), it_appify_app_AbstractWebApp_$getViewFragment__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_examples_emsmobile_EmsMobileAppImpl$2_this$01, 'dumpFrame'));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/2', 108);
function it_appify_examples_emsmobile_EmsMobileAppImpl$3_EmsMobileAppImpl$3__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerDumpController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$3_val$controllerDumpController2 = val$controllerDumpController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(109, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$3_EmsMobileAppImpl$3__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_emsmobile_EmsMobileAppImpl$3_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_examples_emsmobile_controller_DumpController_$onRefreshDump__Lit_appify_examples_emsmobile_controller_DumpController_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$3_val$controllerDumpController2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/3', 109);
function it_appify_examples_emsmobile_EmsMobileAppImpl$4_EmsMobileAppImpl$4__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerMainPageNavigationController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$4_val$controllerMainPageNavigationController2 = val$controllerMainPageNavigationController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(110, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$4_EmsMobileAppImpl$4__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_emsmobile_EmsMobileAppImpl$4_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_examples_emsmobile_controller_MainPageNavigationController_$onCheckInStart__Lit_appify_examples_emsmobile_controller_MainPageNavigationController_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$4_val$controllerMainPageNavigationController2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/4', 110);
function it_appify_examples_emsmobile_EmsMobileAppImpl$5_EmsMobileAppImpl$5__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerMenuController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$5_val$controllerMenuController2 = val$controllerMenuController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(111, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$5_EmsMobileAppImpl$5__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_emsmobile_EmsMobileAppImpl$5_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_examples_emsmobile_controller_MenuController_$controlMenu__Lit_appify_examples_emsmobile_controller_MenuController_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$5_val$controllerMenuController2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/5', 111);
function it_appify_examples_emsmobile_EmsMobileAppImpl$6_EmsMobileAppImpl$6__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_VehicleListController_2V(this$0, $anonymous3){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$6_this$01 = this$0;
  it_appify_app_ControllerHolder_ControllerHolder__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2V.call(this, $anonymous3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(112, 47, {47:1}, it_appify_examples_emsmobile_EmsMobileAppImpl$6_EmsMobileAppImpl$6__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_controller_VehicleListController_2V);
_.injectViewElements__V = function it_appify_examples_emsmobile_EmsMobileAppImpl$6_injectViewElements__V(){
  it_appify_examples_emsmobile_controller_VehicleListController_$setWaitModalText__Lit_appify_examples_emsmobile_controller_VehicleListController_2Lcom_google_gwt_dom_client_Element_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.it_appify_app_ControllerHolder_controller, 69), it_appify_app_AbstractWebApp_$getViewFragment__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_examples_emsmobile_EmsMobileAppImpl$6_this$01, $intern_65));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/6', 112);
function it_appify_examples_emsmobile_EmsMobileAppImpl$7_EmsMobileAppImpl$7__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerVehicleListController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$7_val$controllerVehicleListController2 = val$controllerVehicleListController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(113, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$7_EmsMobileAppImpl$7__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_emsmobile_EmsMobileAppImpl$7_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_app_AbstractWebApp_$back__Lit_appify_app_AbstractWebApp_2V(this.it_appify_examples_emsmobile_EmsMobileAppImpl$7_val$controllerVehicleListController2.it_appify_examples_emsmobile_controller_VehicleListController_app);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/7', 113);
function it_appify_examples_emsmobile_EmsMobileAppImpl$8_EmsMobileAppImpl$8__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerVehicleListController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$8_val$controllerVehicleListController2 = val$controllerVehicleListController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(114, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$8_EmsMobileAppImpl$8__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
_.onEvent__Ljava_lang_String_2Ljava_lang_String_2V = function it_appify_examples_emsmobile_EmsMobileAppImpl$8_onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, source){
  it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this.it_appify_examples_emsmobile_EmsMobileAppImpl$8_val$controllerVehicleListController2.it_appify_examples_emsmobile_controller_VehicleListController_app));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/8', 114);
function it_appify_examples_emsmobile_EmsMobileAppImpl$9_$onEvent__Lit_appify_examples_emsmobile_EmsMobileAppImpl$9_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_examples_emsmobile_model_Item_2V(this$static, model){
  it_appify_examples_emsmobile_controller_VehicleListController_$onItemReceived__Lit_appify_examples_emsmobile_controller_VehicleListController_2Lit_appify_examples_emsmobile_model_Item_2V(this$static.it_appify_examples_emsmobile_EmsMobileAppImpl$9_val$controllerVehicleListController2, model);
}

function it_appify_examples_emsmobile_EmsMobileAppImpl$9_EmsMobileAppImpl$9__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V(val$controllerVehicleListController){
  this.it_appify_examples_emsmobile_EmsMobileAppImpl$9_val$controllerVehicleListController2 = val$controllerVehicleListController;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(115, 1, {}, it_appify_examples_emsmobile_EmsMobileAppImpl$9_EmsMobileAppImpl$9__Lit_appify_examples_emsmobile_EmsMobileAppImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl/9', 115);
function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, $intern_71);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(51, 59, {}, it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl__V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_EmsMobileModelBeanJsonDeserializerImpl__V;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperEmsMobileModelImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_EmsMobileModelBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl_11ObjectMapperEmsMobileModelImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl_ObjectMapperEmsMobileModelImpl', 51);
function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperItemImpl_EmsMobileAppImpl_1ObjectMapperItemImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, 'Item');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(161, 59, {}, it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperItemImpl_EmsMobileAppImpl_1ObjectMapperItemImpl__V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperItemImpl_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_ItemBeanJsonDeserializerImpl__V;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_EmsMobileAppImpl_1ObjectMapperItemImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_ItemBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileAppImpl_11ObjectMapperItemImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileAppImpl_ObjectMapperItemImpl', 161);
function it_appify_examples_emsmobile_EmsMobileEntryPoint$1_$onAppStart__Lit_appify_examples_emsmobile_EmsMobileEntryPoint$1_2Lit_appify_app_WebApp_2V(app){
  'App started: ' + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(app.it_appify_app_AbstractWebApp_modelView), 9).it_appify_examples_emsmobile_model_EmsMobileModel_barStatus.it_appify_examples_emsmobile_model_BarStatus_gpsStatus;
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(app, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(app.it_appify_app_AbstractWebApp_modelView), 9));
  it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V((it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(app) , $intern_72), 'Stato GPS', '', $intern_73);
}

function it_appify_examples_emsmobile_EmsMobileEntryPoint$1_EmsMobileEntryPoint$1__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(96, 1, {}, it_appify_examples_emsmobile_EmsMobileEntryPoint$1_EmsMobileEntryPoint$1__Lit_appify_examples_emsmobile_EmsMobileEntryPoint_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1EmsMobileEntryPoint$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'EmsMobileEntryPoint/1', 96);
function it_appify_examples_emsmobile_controller_DumpController_$_1refreshFrame__Lit_appify_examples_emsmobile_controller_DumpController_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(frame_0, url_0){
  frame_0.src = url_0;
}

function it_appify_examples_emsmobile_controller_DumpController_$onRefreshDump__Lit_appify_examples_emsmobile_controller_DumpController_2V(this$static){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_controller_DumpController_app.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_examples_emsmobile_controller_DumpController_$_1refreshFrame__Lit_appify_examples_emsmobile_controller_DumpController_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2V(this$static.it_appify_examples_emsmobile_controller_DumpController_dumpFrameElement, model.it_appify_examples_emsmobile_model_EmsMobileModel_dumpUrl);
}

function it_appify_examples_emsmobile_controller_DumpController_$setDumpFrameElement__Lit_appify_examples_emsmobile_controller_DumpController_2Lcom_google_gwt_dom_client_Element_2V(this$static, dumpFrameElement){
  this$static.it_appify_examples_emsmobile_controller_DumpController_dumpFrameElement = dumpFrameElement;
}

function it_appify_examples_emsmobile_controller_DumpController_DumpController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_controller_DumpController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(68, 1, {68:1}, it_appify_examples_emsmobile_controller_DumpController_DumpController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1DumpController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'DumpController', 68);
function it_appify_examples_emsmobile_controller_MainPageNavigationController_$onCheckInStart__Lit_appify_examples_emsmobile_controller_MainPageNavigationController_2V(this$static){
  if (com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_controller_MainPageNavigationController_app.it_appify_app_AbstractWebApp_modelView), 9).it_appify_examples_emsmobile_model_EmsMobileModel_vehicleCode == null) {
    !it_appify_app_ServiceProvider_webScreenOrientation && (it_appify_app_ServiceProvider_webScreenOrientation = new it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V);
    console.log('_requestFullScreen: ');
    $wnd.Fullscreen.launch($doc.documentElement);
    it_appify_app_AbstractWebApp_$moveTo__Lit_appify_app_AbstractWebApp_2Ljava_lang_String_2V(this$static.it_appify_examples_emsmobile_controller_MainPageNavigationController_app);
  }
   else {
    it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_controller_MainPageNavigationController_app));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , new it_appify_examples_emsmobile_controller_MainPageNavigationController$1_MainPageNavigationController$1__Lit_appify_examples_emsmobile_controller_MainPageNavigationController_2V(this$static)), 5000);
  }
}

function it_appify_examples_emsmobile_controller_MainPageNavigationController_MainPageNavigationController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_controller_MainPageNavigationController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(155, 1, {}, it_appify_examples_emsmobile_controller_MainPageNavigationController_MainPageNavigationController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1MainPageNavigationController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'MainPageNavigationController', 155);
function it_appify_examples_emsmobile_controller_MainPageNavigationController$1_MainPageNavigationController$1__Lit_appify_examples_emsmobile_controller_MainPageNavigationController_2V(this$0){
  this.it_appify_examples_emsmobile_controller_MainPageNavigationController$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(156, 1, {}, it_appify_examples_emsmobile_controller_MainPageNavigationController$1_MainPageNavigationController$1__Lit_appify_examples_emsmobile_controller_MainPageNavigationController_2V);
_.execute__Z = function it_appify_examples_emsmobile_controller_MainPageNavigationController$1_execute__Z(){
  var model;
  it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this.it_appify_examples_emsmobile_controller_MainPageNavigationController$1_this$01.it_appify_examples_emsmobile_controller_MainPageNavigationController_app));
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this.it_appify_examples_emsmobile_controller_MainPageNavigationController$1_this$01.it_appify_examples_emsmobile_controller_MainPageNavigationController_app.it_appify_app_AbstractWebApp_modelView), 9);
  model.it_appify_examples_emsmobile_model_EmsMobileModel_vehicleCode = null;
  model.it_appify_examples_emsmobile_model_EmsMobileModel_checkInLabel = $intern_75;
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this.it_appify_examples_emsmobile_controller_MainPageNavigationController$1_this$01.it_appify_examples_emsmobile_controller_MainPageNavigationController_app, model);
  return false;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1MainPageNavigationController$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'MainPageNavigationController/1', 156);
function it_appify_examples_emsmobile_controller_MenuController_$controlMenu__Lit_appify_examples_emsmobile_controller_MenuController_2V(this$static){
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(it_appify_view_AppJsPageManager_$_1getMenuState__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2(), 'left')?it_appify_view_AppJsPageManager_$closeContextMenu__Lit_appify_view_AppJsPageManager_2V(this$static.it_appify_examples_emsmobile_controller_MenuController_app.it_appify_app_AbstractWebApp_pageManager):(this$static.it_appify_examples_emsmobile_controller_MenuController_app.it_appify_app_AbstractWebApp_pageManager.it_appify_view_AppJsPageManager_menuOpened = 'content' , $wnd.snapper = new $wnd.Snap({element:$doc.getElementById('content')}) , $wnd.snapper.open('left') , undefined);
}

function it_appify_examples_emsmobile_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_controller_MenuController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(157, 1, {}, it_appify_examples_emsmobile_controller_MenuController_MenuController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1MenuController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'MenuController', 157);
function it_appify_examples_emsmobile_controller_VehicleListController_$onItemReceived__Lit_appify_examples_emsmobile_controller_VehicleListController_2Lit_appify_examples_emsmobile_model_Item_2V(this$static, i){
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.it_appify_examples_emsmobile_controller_VehicleListController_waitModalText, 'Hai selezionato: ' + i.it_appify_examples_emsmobile_model_Item_code + ' - ' + i.it_appify_examples_emsmobile_model_Item_name);
  it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_controller_VehicleListController_app));
  com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , new it_appify_examples_emsmobile_controller_VehicleListController$1_VehicleListController$1__Lit_appify_examples_emsmobile_controller_VehicleListController_2V(this$static, i)), 5000);
}

function it_appify_examples_emsmobile_controller_VehicleListController_$setWaitModalText__Lit_appify_examples_emsmobile_controller_VehicleListController_2Lcom_google_gwt_dom_client_Element_2V(this$static, waitModalText){
  this$static.it_appify_examples_emsmobile_controller_VehicleListController_waitModalText = waitModalText;
}

function it_appify_examples_emsmobile_controller_VehicleListController_VehicleListController__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_controller_VehicleListController_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(69, 1, {69:1}, it_appify_examples_emsmobile_controller_VehicleListController_VehicleListController__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1VehicleListController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'VehicleListController', 69);
function it_appify_examples_emsmobile_controller_VehicleListController$1_VehicleListController$1__Lit_appify_examples_emsmobile_controller_VehicleListController_2V(this$0, val$i){
  this.it_appify_examples_emsmobile_controller_VehicleListController$1_this$01 = this$0;
  this.it_appify_examples_emsmobile_controller_VehicleListController$1_val$i2 = val$i;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(158, 1, {}, it_appify_examples_emsmobile_controller_VehicleListController$1_VehicleListController$1__Lit_appify_examples_emsmobile_controller_VehicleListController_2V);
_.execute__Z = function it_appify_examples_emsmobile_controller_VehicleListController$1_execute__Z(){
  var model;
  it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this.it_appify_examples_emsmobile_controller_VehicleListController$1_this$01.it_appify_examples_emsmobile_controller_VehicleListController_app));
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this.it_appify_examples_emsmobile_controller_VehicleListController$1_this$01.it_appify_examples_emsmobile_controller_VehicleListController_app.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_examples_emsmobile_model_EmsMobileModel_$setVehicleCode__Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2V(model, this.it_appify_examples_emsmobile_controller_VehicleListController$1_val$i2.it_appify_examples_emsmobile_model_Item_name);
  model.it_appify_examples_emsmobile_model_EmsMobileModel_checkInLabel = 'Fine Turno';
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this.it_appify_examples_emsmobile_controller_VehicleListController$1_this$01.it_appify_examples_emsmobile_controller_VehicleListController_app, model);
  it_appify_app_AbstractWebApp_$back__Lit_appify_app_AbstractWebApp_2V(this.it_appify_examples_emsmobile_controller_VehicleListController$1_this$01.it_appify_examples_emsmobile_controller_VehicleListController_app);
  return false;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1controller_1VehicleListController$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_74, 'VehicleListController/1', 158);
function it_appify_examples_emsmobile_model_BarStatus_$setBatteryStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(this$static, batteryStatus){
  this$static.it_appify_examples_emsmobile_model_BarStatus_batteryStatus = batteryStatus;
}

function it_appify_examples_emsmobile_model_BarStatus_$setConnectionStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(this$static, connectionStatus){
  this$static.it_appify_examples_emsmobile_model_BarStatus_connectionStatus = connectionStatus;
}

function it_appify_examples_emsmobile_model_BarStatus_$setGpsStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(this$static, gpsStatus){
  this$static.it_appify_examples_emsmobile_model_BarStatus_gpsStatus = gpsStatus;
}

function it_appify_examples_emsmobile_model_BarStatus_BarStatus__V(){
  this.it_appify_examples_emsmobile_model_BarStatus_gpsStatus = $intern_76;
  this.it_appify_examples_emsmobile_model_BarStatus_batteryStatus = $intern_76;
  this.it_appify_examples_emsmobile_model_BarStatus_connectionStatus = $intern_76;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(27, 1, {27:1, 3:1}, it_appify_examples_emsmobile_model_BarStatus_BarStatus__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatus', 27);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_BarStatusBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(264, 35, {}, it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_BarStatusBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatus_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'gpsStatus', new it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_BarStatusBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_78, new it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_BarStatusBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_79, new it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_BarStatusBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$1_BarStatusBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonDeserializerImpl', 264);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$1_BarStatusBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(265, 1, {}, it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$1_BarStatusBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_examples_emsmobile_model_BarStatus_BarStatus__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonDeserializerImpl/1', 265);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_BarStatus_gpsStatus = value_0;
}

function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_BarStatusBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(266, 8, $intern_7, it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_BarStatusBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonDeserializerImpl/2', 266);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_BarStatus_batteryStatus = value_0;
}

function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_BarStatusBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(267, 8, $intern_7, it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_BarStatusBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonDeserializerImpl/3', 267);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_BarStatus_connectionStatus = value_0;
}

function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_BarStatusBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(268, 8, $intern_7, it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_BarStatusBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl$4_2Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonDeserializerImpl/4', 268);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_BarStatusBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(237, 34, {}, it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_BarStatusBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatus_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 3, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$1_BarStatusBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$2_BarStatusBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$3_BarStatusBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonSerializerImpl', 237);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$1_BarStatusBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'gpsStatus');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(238, 4, $intern_16, it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$1_BarStatusBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27).it_appify_examples_emsmobile_model_BarStatus_gpsStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonSerializerImpl/1', 238);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$2_BarStatusBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_78);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(239, 4, $intern_16, it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$2_BarStatusBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27).it_appify_examples_emsmobile_model_BarStatus_batteryStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonSerializerImpl/2', 239);
function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$3_BarStatusBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_79);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(240, 4, $intern_16, it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$3_BarStatusBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 27).it_appify_examples_emsmobile_model_BarStatus_connectionStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1BarStatusBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'BarStatusBeanJsonSerializerImpl/3', 240);
function it_appify_examples_emsmobile_model_EmsMobileModel_$setBarStatus__Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_examples_emsmobile_model_BarStatus_2V(this$static, barStatus){
  this$static.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus = barStatus;
}

function it_appify_examples_emsmobile_model_EmsMobileModel_$setVehicleCode__Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2V(this$static, vehicleCode){
  this$static.it_appify_examples_emsmobile_model_EmsMobileModel_vehicleCode = vehicleCode;
}

function it_appify_examples_emsmobile_model_EmsMobileModel_EmsMobileModel__V(){
  this.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus = new it_appify_examples_emsmobile_model_BarStatus_BarStatus__V;
  this.it_appify_examples_emsmobile_model_EmsMobileModel_checkInLabel = $intern_75;
  this.it_appify_examples_emsmobile_model_EmsMobileModel_items = new java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1Item_12_1classLit, 1), $intern_14, 25, 0, [new it_appify_examples_emsmobile_model_Item_Item__Ljava_lang_String_2Ljava_lang_String_2V('1', 'Name1'), new it_appify_examples_emsmobile_model_Item_Item__Ljava_lang_String_2Ljava_lang_String_2V('2', 'Name2')]));
  this.it_appify_examples_emsmobile_model_EmsMobileModel_items2 = new java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_14, 2, 4, ['Item 1', 'Item 2', 'Item 3']));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(9, 1, {9:1, 3:1}, it_appify_examples_emsmobile_model_EmsMobileModel_EmsMobileModel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, $intern_71, 9);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_EmsMobileModelBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(183, 35, {}, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_EmsMobileModelBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModel_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_78, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_EmsMobileModelBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'position', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_EmsMobileModelBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'screen', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_EmsMobileModelBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_80, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_EmsMobileModelBeanJsonDeserializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'dumpUrl', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_EmsMobileModelBeanJsonDeserializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'items', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_EmsMobileModelBeanJsonDeserializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'items2', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_EmsMobileModelBeanJsonDeserializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'barStatus', new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_EmsMobileModelBeanJsonDeserializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_81, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_EmsMobileModelBeanJsonDeserializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_82, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_EmsMobileModelBeanJsonDeserializerImpl$11__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$1_EmsMobileModelBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl', 183);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$1_EmsMobileModelBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(184, 1, {}, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$1_EmsMobileModelBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_examples_emsmobile_model_EmsMobileModel_EmsMobileModel__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/1', 184);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_vehicleCode = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_EmsMobileModelBeanJsonDeserializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(193, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_EmsMobileModelBeanJsonDeserializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$10_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/10', 193);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_checkInLabel = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_EmsMobileModelBeanJsonDeserializerImpl$11__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(194, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_EmsMobileModelBeanJsonDeserializerImpl$11__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$11_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/11', 194);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_batteryStatus = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_EmsMobileModelBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(185, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_EmsMobileModelBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_BatteryStatusBeanJsonDeserializerImpl_BatteryStatusBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_BatteryStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 40));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/2', 185);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_Geoposition_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_position = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_EmsMobileModelBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(186, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_EmsMobileModelBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_Geoposition_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 41));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/3', 186);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_Screen_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_screen = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_EmsMobileModelBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(187, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_EmsMobileModelBeanJsonDeserializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_ScreenBeanJsonDeserializerImpl_ScreenBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$4_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_Screen_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 21));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/4', 187);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_screenOrientation = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_EmsMobileModelBeanJsonDeserializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(188, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_EmsMobileModelBeanJsonDeserializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_ScreenOrientationBeanJsonDeserializerImpl_ScreenOrientationBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$5_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_api_ScreenOrientation_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 38));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/5', 188);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_dumpUrl = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_EmsMobileModelBeanJsonDeserializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(189, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_EmsMobileModelBeanJsonDeserializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$6_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/6', 189);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_util_List_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_items = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_EmsMobileModelBeanJsonDeserializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(190, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_EmsMobileModelBeanJsonDeserializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new com_github_nmorel_gwtjackson_client_deser_collection_ListJsonDeserializer_ListJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V(new it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_ItemBeanJsonDeserializerImpl__V);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$7_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_util_List_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 14));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/7', 190);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_util_List_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_items2 = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_EmsMobileModelBeanJsonDeserializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(191, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_EmsMobileModelBeanJsonDeserializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new com_github_nmorel_gwtjackson_client_deser_collection_ListJsonDeserializer_ListJsonDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2V((com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE));
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$8_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Ljava_util_List_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 14));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/8', 191);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_examples_emsmobile_model_BarStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus = value_0;
}

function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_EmsMobileModelBeanJsonDeserializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(192, 8, $intern_7, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_EmsMobileModelBeanJsonDeserializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_examples_emsmobile_model_BarStatusBeanJsonDeserializerImpl_BarStatusBeanJsonDeserializerImpl__V;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_$setValue__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonDeserializerImpl$9_2Lit_appify_examples_emsmobile_model_EmsMobileModel_2Lit_appify_examples_emsmobile_model_BarStatus_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(value_0, 27));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonDeserializerImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonDeserializerImpl/9', 192);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_EmsMobileModelBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(170, 34, {}, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_EmsMobileModelBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModel_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 10, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$1_EmsMobileModelBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$2_EmsMobileModelBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 2, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$3_EmsMobileModelBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 3, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$4_EmsMobileModelBeanJsonSerializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 4, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$5_EmsMobileModelBeanJsonSerializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 5, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$6_EmsMobileModelBeanJsonSerializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 6, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$7_EmsMobileModelBeanJsonSerializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 7, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$8_EmsMobileModelBeanJsonSerializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 8, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$9_EmsMobileModelBeanJsonSerializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 9, new it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$10_EmsMobileModelBeanJsonSerializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl', 170);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$1_EmsMobileModelBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_78);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(171, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$1_EmsMobileModelBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_batteryStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_BatteryStatusBeanJsonSerializerImpl_BatteryStatusBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/1', 171);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$10_EmsMobileModelBeanJsonSerializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_82);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(180, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$10_EmsMobileModelBeanJsonSerializerImpl$10__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$10_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_checkInLabel;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$10_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$10_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/10', 180);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$2_EmsMobileModelBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'position');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(172, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$2_EmsMobileModelBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_position;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/2', 172);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$3_EmsMobileModelBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'screen');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(173, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$3_EmsMobileModelBeanJsonSerializerImpl$3__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$3_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_screen;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$3_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_ScreenBeanJsonSerializerImpl_ScreenBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/3', 173);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$4_EmsMobileModelBeanJsonSerializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_80);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(174, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$4_EmsMobileModelBeanJsonSerializerImpl$4__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$4_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_screenOrientation;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$4_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_ScreenOrientationBeanJsonSerializerImpl_ScreenOrientationBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/4', 174);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$5_EmsMobileModelBeanJsonSerializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'dumpUrl');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(175, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$5_EmsMobileModelBeanJsonSerializerImpl$5__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$5_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_dumpUrl;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$5_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/5', 175);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$6_EmsMobileModelBeanJsonSerializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'items');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(176, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$6_EmsMobileModelBeanJsonSerializerImpl$6__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$6_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_items;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$6_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_CollectionJsonSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2V(new it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_ItemBeanJsonSerializerImpl__V);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/6', 176);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$7_EmsMobileModelBeanJsonSerializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'items2');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(177, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$7_EmsMobileModelBeanJsonSerializerImpl$7__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$7_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_items2;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$7_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new com_github_nmorel_gwtjackson_client_ser_CollectionJsonSerializer_CollectionJsonSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2V((com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/7', 177);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$8_EmsMobileModelBeanJsonSerializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'barStatus');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(178, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$8_EmsMobileModelBeanJsonSerializerImpl$8__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$8_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_barStatus;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$8_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_examples_emsmobile_model_BarStatusBeanJsonSerializerImpl_BarStatusBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$8_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/8', 178);
function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$9_EmsMobileModelBeanJsonSerializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_81);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(179, 4, $intern_16, it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$9_EmsMobileModelBeanJsonSerializerImpl$9__Lit_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$9_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 9).it_appify_examples_emsmobile_model_EmsMobileModel_vehicleCode;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_EmsMobileModelBeanJsonSerializerImpl$9_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1EmsMobileModelBeanJsonSerializerImpl$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'EmsMobileModelBeanJsonSerializerImpl/9', 179);
function it_appify_examples_emsmobile_model_Item_Item__V(){
  it_appify_examples_emsmobile_model_Item_Item__Ljava_lang_String_2Ljava_lang_String_2V.call(this, '', '');
}

function it_appify_examples_emsmobile_model_Item_Item__Ljava_lang_String_2Ljava_lang_String_2V(code_0, name_0){
  this.it_appify_examples_emsmobile_model_Item_name = name_0;
  this.it_appify_examples_emsmobile_model_Item_code = code_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(25, 1, {25:1, 3:1}, it_appify_examples_emsmobile_model_Item_Item__V, it_appify_examples_emsmobile_model_Item_Item__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1Item_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'Item', 25);
function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_ItemBeanJsonDeserializerImpl__V(){
  com_github_nmorel_gwtjackson_client_deser_bean_AbstractBeanJsonDeserializer_AbstractBeanJsonDeserializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(87, 35, {}, it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_ItemBeanJsonDeserializerImpl__V);
_.getDeserializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_getDeserializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1Item_12_1classLit;
}
;
_.initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_initDeserializers__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2(){
  var map_0;
  map_0 = {};
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, $intern_83, new it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_ItemBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V);
  com_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_$put__Lcom_github_nmorel_gwtjackson_client_deser_bean_SimpleStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, 'code', new it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_ItemBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V);
  return map_0;
}
;
_.initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_initInstanceBuilder__Lcom_github_nmorel_gwtjackson_client_deser_bean_InstanceBuilder_2(){
  return new it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$1_ItemBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonDeserializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonDeserializerImpl', 87);
function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$1_ItemBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(195, 1, {}, it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$1_ItemBeanJsonDeserializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V);
_.newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$1_newInstance__Lcom_github_nmorel_gwtjackson_client_stream_JsonReader_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2Ljava_util_Map_2Lcom_github_nmorel_gwtjackson_client_deser_bean_Instance_2(reader, ctx, bufferedProperties){
  return new com_github_nmorel_gwtjackson_client_deser_bean_Instance_Instance__Ljava_lang_Object_2Ljava_util_Map_2V(new it_appify_examples_emsmobile_model_Item_Item__V, bufferedProperties);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonDeserializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonDeserializerImpl/1', 195);
function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_Item_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_Item_name = value_0;
}

function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_ItemBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(196, 8, $intern_7, it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_ItemBeanJsonDeserializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_$setValue__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$2_2Lit_appify_examples_emsmobile_model_Item_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 25), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonDeserializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonDeserializerImpl/2', 196);
function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_Item_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0){
  bean.it_appify_examples_emsmobile_model_Item_code = value_0;
}

function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_ItemBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(197, 8, $intern_7, it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_ItemBeanJsonDeserializerImpl$3__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl_2V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_$clinit__V() , com_github_nmorel_gwtjackson_client_deser_StringJsonDeserializer_INSTANCE;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V = function it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_setValue__Ljava_lang_Object_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(bean, value_0, ctx){
  it_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_$setValue__Lit_appify_examples_emsmobile_model_ItemBeanJsonDeserializerImpl$3_2Lit_appify_examples_emsmobile_model_Item_2Ljava_lang_String_2Lcom_github_nmorel_gwtjackson_client_JsonDeserializationContext_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 25), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(value_0));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonDeserializerImpl$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonDeserializerImpl/3', 197);
function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_ItemBeanJsonSerializerImpl__V(){
  com_github_nmorel_gwtjackson_client_ser_bean_AbstractBeanJsonSerializer_AbstractBeanJsonSerializer__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(86, 34, {}, it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_ItemBeanJsonSerializerImpl__V);
_.getSerializedType__Ljava_lang_Class_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_getSerializedType__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1Item_12_1classLit;
}
;
_.initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_initSerializers___3Lcom_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_2(){
  var result;
  result = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1github_1nmorel_1gwtjackson_1client_1ser_1bean_1BeanPropertySerializer_12_1classLit, $intern_14, 4, 2, 0, 1);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 0, new it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$1_ItemBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(result, 1, new it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$2_ItemBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V);
  return result;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonSerializerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonSerializerImpl', 86);
function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$1_ItemBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, $intern_83);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(181, 4, $intern_16, it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$1_ItemBeanJsonSerializerImpl$1__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$1_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 25).it_appify_examples_emsmobile_model_Item_name;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$1_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonSerializerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonSerializerImpl/1', 181);
function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$2_ItemBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V(){
  com_github_nmorel_gwtjackson_client_ser_bean_BeanPropertySerializer_BeanPropertySerializer__Ljava_lang_String_2V.call(this, 'code');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(182, 4, $intern_16, it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$2_ItemBeanJsonSerializerImpl$2__Lit_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl_2Ljava_lang_String_2V);
_.getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$2_getValue__Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_Object_2(bean, ctx){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(bean, 25).it_appify_examples_emsmobile_model_Item_code;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_examples_emsmobile_model_ItemBeanJsonSerializerImpl$2_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_$clinit__V() , com_github_nmorel_gwtjackson_client_ser_StringJsonSerializer_INSTANCE;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1model_1ItemBeanJsonSerializerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ItemBeanJsonSerializerImpl/2', 182);
function it_appify_examples_emsmobile_service_BatteryStatusService_$check__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$static){
  it_appify_battery_AdvancedJSBattery_$getBatteryStatus__Lit_appify_battery_AdvancedJSBattery_2Lit_appify_api_Battery$BatteryStatusCallback_2V((!it_appify_app_ServiceProvider_battery && (it_appify_app_ServiceProvider_battery = new it_appify_battery_AdvancedJSBattery_AdvancedJSBattery__V) , it_appify_app_ServiceProvider_battery), new it_appify_examples_emsmobile_service_BatteryStatusService$2_BatteryStatusService$2__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$static));
}

function it_appify_examples_emsmobile_service_BatteryStatusService_$startBatteryMonitor__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$static){
  com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedPeriodImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , new it_appify_examples_emsmobile_service_BatteryStatusService$1_BatteryStatusService$1__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$static)), 10000);
}

function it_appify_examples_emsmobile_service_BatteryStatusService_BatteryStatusService__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_service_BatteryStatusService_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(146, 1, {}, it_appify_examples_emsmobile_service_BatteryStatusService_BatteryStatusService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1BatteryStatusService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'BatteryStatusService', 146);
function it_appify_examples_emsmobile_service_BatteryStatusService$1_BatteryStatusService$1__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$0){
  this.it_appify_examples_emsmobile_service_BatteryStatusService$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(147, 1, {}, it_appify_examples_emsmobile_service_BatteryStatusService$1_BatteryStatusService$1__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V);
_.execute__Z = function it_appify_examples_emsmobile_service_BatteryStatusService$1_execute__Z(){
  it_appify_examples_emsmobile_service_BatteryStatusService_$check__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this.it_appify_examples_emsmobile_service_BatteryStatusService$1_this$01);
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1BatteryStatusService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'BatteryStatusService/1', 147);
function it_appify_examples_emsmobile_service_BatteryStatusService$2_$onBatteryStatus__Lit_appify_examples_emsmobile_service_BatteryStatusService$2_2Lit_appify_api_BatteryStatus_2V(this$static, currentStatus){
  var level, model;
  level = currentStatus.it_appify_api_BatteryStatus_level;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_service_BatteryStatusService$2_this$01.it_appify_examples_emsmobile_service_BatteryStatusService_app.it_appify_app_AbstractWebApp_modelView), 9);
  level < 0.4?it_appify_examples_emsmobile_model_BarStatus_$setBatteryStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_85):level > 0.4 && level < 0.6?it_appify_examples_emsmobile_model_BarStatus_$setBatteryStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_76):level > 0.6 && it_appify_examples_emsmobile_model_BarStatus_$setBatteryStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_86);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_emsmobile_service_BatteryStatusService$2_this$01.it_appify_examples_emsmobile_service_BatteryStatusService_app, model);
  it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V((it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_service_BatteryStatusService$2_this$01.it_appify_examples_emsmobile_service_BatteryStatusService_app) , 'batteryStateBtn'), 'Stato Batteria', '' + currentStatus.it_appify_api_BatteryStatus_level * 100 + '%', $intern_73);
}

function it_appify_examples_emsmobile_service_BatteryStatusService$2_BatteryStatusService$2__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V(this$0){
  this.it_appify_examples_emsmobile_service_BatteryStatusService$2_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(148, 1, {}, it_appify_examples_emsmobile_service_BatteryStatusService$2_BatteryStatusService$2__Lit_appify_examples_emsmobile_service_BatteryStatusService_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1BatteryStatusService$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'BatteryStatusService/2', 148);
function it_appify_examples_emsmobile_service_ConnectionStateService_$check__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$static){
  it_appify_offline_HTML5ApplicationCache_$getConnetionStatus__Lit_appify_offline_HTML5ApplicationCache_2Lit_appify_api_ApplicationCache$CheckConnectedCallback_2V((!it_appify_app_ServiceProvider_applicationCache && (it_appify_app_ServiceProvider_applicationCache = new it_appify_offline_HTML5ApplicationCache_HTML5ApplicationCache__V) , it_appify_app_ServiceProvider_applicationCache), new it_appify_examples_emsmobile_service_ConnectionStateService$2_ConnectionStateService$2__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$static));
}

function it_appify_examples_emsmobile_service_ConnectionStateService_$startCheckConnectionState__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$static){
  com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedPeriodImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , new it_appify_examples_emsmobile_service_ConnectionStateService$1_ConnectionStateService$1__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$static)), 5000);
}

function it_appify_examples_emsmobile_service_ConnectionStateService_ConnectionStateService__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_service_ConnectionStateService_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(149, 1, {}, it_appify_examples_emsmobile_service_ConnectionStateService_ConnectionStateService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1ConnectionStateService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'ConnectionStateService', 149);
function it_appify_examples_emsmobile_service_ConnectionStateService$1_ConnectionStateService$1__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$0){
  this.it_appify_examples_emsmobile_service_ConnectionStateService$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(150, 1, {}, it_appify_examples_emsmobile_service_ConnectionStateService$1_ConnectionStateService$1__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V);
_.execute__Z = function it_appify_examples_emsmobile_service_ConnectionStateService$1_execute__Z(){
  it_appify_examples_emsmobile_service_ConnectionStateService_$check__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this.it_appify_examples_emsmobile_service_ConnectionStateService$1_this$01);
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1ConnectionStateService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'ConnectionStateService/1', 150);
function it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOffline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_examples_emsmobile_model_BarStatus_$setConnectionStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_85);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app, model);
  it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V((it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app) , $intern_87), $intern_88, 'Offline', $intern_73);
}

function it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOnline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_examples_emsmobile_model_BarStatus_$setConnectionStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_86);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app, model);
  it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V((it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01.it_appify_examples_emsmobile_service_ConnectionStateService_app) , $intern_87), $intern_88, 'Online', $intern_73);
}

function it_appify_examples_emsmobile_service_ConnectionStateService$2_ConnectionStateService$2__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V(this$0){
  this.it_appify_examples_emsmobile_service_ConnectionStateService$2_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(151, 1, {}, it_appify_examples_emsmobile_service_ConnectionStateService$2_ConnectionStateService$2__Lit_appify_examples_emsmobile_service_ConnectionStateService_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1ConnectionStateService$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'ConnectionStateService/2', 151);
function it_appify_examples_emsmobile_service_GeolocationService_$check__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$static){
  it_appify_geolocation_HTML5Geolocation_$getCurrentPosition__Lit_appify_geolocation_HTML5Geolocation_2Lit_appify_api_Geolocation$GeolocationCallback_2V(it_appify_app_ServiceProvider_createGeoLocationService__ZIJLit_appify_api_Geolocation_2(), new it_appify_examples_emsmobile_service_GeolocationService$2_GeolocationService$2__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$static));
}

function it_appify_examples_emsmobile_service_GeolocationService_$startGeolocationService__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$static){
  com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedPeriodImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , new it_appify_examples_emsmobile_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$static)), 5000);
}

function it_appify_examples_emsmobile_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V(app){
  this.it_appify_examples_emsmobile_service_GeolocationService_app = app;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(152, 1, {}, it_appify_examples_emsmobile_service_GeolocationService_GeolocationService__Lit_appify_app_WebApp_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1GeolocationService_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'GeolocationService', 152);
function it_appify_examples_emsmobile_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$0){
  this.it_appify_examples_emsmobile_service_GeolocationService$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(153, 1, {}, it_appify_examples_emsmobile_service_GeolocationService$1_GeolocationService$1__Lit_appify_examples_emsmobile_service_GeolocationService_2V);
_.execute__Z = function it_appify_examples_emsmobile_service_GeolocationService$1_execute__Z(){
  it_appify_examples_emsmobile_service_GeolocationService_$check__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this.it_appify_examples_emsmobile_service_GeolocationService$1_this$01);
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1GeolocationService$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'GeolocationService/1', 153);
function it_appify_examples_emsmobile_service_GeolocationService$2_$onError__Lit_appify_examples_emsmobile_service_GeolocationService$2_2ILjava_lang_String_2V(this$static){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_service_GeolocationService$2_this$01.it_appify_examples_emsmobile_service_GeolocationService_app.it_appify_app_AbstractWebApp_modelView), 9);
  it_appify_examples_emsmobile_model_BarStatus_$setGpsStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_85);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_emsmobile_service_GeolocationService$2_this$01.it_appify_examples_emsmobile_service_GeolocationService_app, model);
}

function it_appify_examples_emsmobile_service_GeolocationService$2_$onPosition__Lit_appify_examples_emsmobile_service_GeolocationService$2_2Lit_appify_api_Geoposition_2V(this$static, position){
  var model;
  model = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(it_appify_view_VueJsViewModel_$getCurrentModel__Lit_appify_view_VueJsViewModel_2Ljava_lang_Object_2(this$static.it_appify_examples_emsmobile_service_GeolocationService$2_this$01.it_appify_examples_emsmobile_service_GeolocationService_app.it_appify_app_AbstractWebApp_modelView), 9);
  model.it_appify_examples_emsmobile_model_EmsMobileModel_position = position;
  it_appify_examples_emsmobile_model_BarStatus_$setGpsStatus__Lit_appify_examples_emsmobile_model_BarStatus_2Ljava_lang_String_2V(model.it_appify_examples_emsmobile_model_EmsMobileModel_barStatus, $intern_86);
  it_appify_app_AbstractWebApp_$updateAppState__Lit_appify_app_AbstractWebApp_2Ljava_lang_Object_2V(this$static.it_appify_examples_emsmobile_service_GeolocationService$2_this$01.it_appify_examples_emsmobile_service_GeolocationService_app, model);
  it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V((it_appify_app_AbstractWebApp_$getCurrentPage__Lit_appify_app_AbstractWebApp_2Lit_appify_view_WebPage_2(this$static.it_appify_examples_emsmobile_service_GeolocationService$2_this$01.it_appify_examples_emsmobile_service_GeolocationService_app) , $intern_72), 'Stato GPS', position.it_appify_api_Geoposition_coords.it_appify_api_Coordinates_latitude + ' ' + position.it_appify_api_Geoposition_coords.it_appify_api_Coordinates_longitude, $intern_73);
}

function it_appify_examples_emsmobile_service_GeolocationService$2_GeolocationService$2__Lit_appify_examples_emsmobile_service_GeolocationService_2V(this$0){
  this.it_appify_examples_emsmobile_service_GeolocationService$2_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(154, 1, {}, it_appify_examples_emsmobile_service_GeolocationService$2_GeolocationService$2__Lit_appify_examples_emsmobile_service_GeolocationService_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1examples_1emsmobile_1service_1GeolocationService$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_84, 'GeolocationService/2', 154);
function it_appify_geolocation_GeolocationJsObject_$_1getCurrentPosition__Lit_appify_geolocation_GeolocationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(this$static, options){
  console.log(' _getCurrentPosition');
  var that = this$static;
  $wnd.navigator.geolocation.getCurrentPosition(function(position){
    that.onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V(position);
  }
  , function(error){
    that.onPositionError__ILjava_lang_String_2V(error.code, error.message);
  }
  , options);
}

function it_appify_geolocation_GeolocationJsObject_$getCurrentPosition__Lit_appify_geolocation_GeolocationJsObject_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static, callback){
  var geoOpt, json;
  this$static.it_appify_geolocation_GeolocationJsObject_callback = callback;
  geoOpt = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2('{}');
  if (this$static.it_appify_geolocation_GeolocationJsObject_options) {
    json = com_github_nmorel_gwtjackson_client_AbstractObjectMapper_$write__Lcom_github_nmorel_gwtjackson_client_AbstractObjectMapper_2Ljava_lang_Object_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2Ljava_lang_String_2(this$static.it_appify_geolocation_GeolocationJsObject_optionsMapper, this$static.it_appify_geolocation_GeolocationJsObject_options, com_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_$build__Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext$Builder_2Lcom_github_nmorel_gwtjackson_client_JsonSerializationContext_2(new com_github_nmorel_gwtjackson_client_JsonSerializationContext$DefaultBuilder_JsonSerializationContext$DefaultBuilder__V));
    geoOpt = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(json);
  }
  it_appify_geolocation_GeolocationJsObject_$_1getCurrentPosition__Lit_appify_geolocation_GeolocationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(this$static, geoOpt);
}

function it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V(options){
  new it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V;
  this.it_appify_geolocation_GeolocationJsObject_optionsMapper = new it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V;
  this.it_appify_geolocation_GeolocationJsObject_options = options;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(210, 1, {}, it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V);
_.onPositionError__ILjava_lang_String_2V = function it_appify_geolocation_GeolocationJsObject_onPositionError__ILjava_lang_String_2V(errorCode, msg){
  !!this.it_appify_geolocation_GeolocationJsObject_callback && it_appify_examples_emsmobile_service_GeolocationService$2_$onError__Lit_appify_examples_emsmobile_service_GeolocationService$2_2ILjava_lang_String_2V(this.it_appify_geolocation_GeolocationJsObject_callback);
  this.it_appify_geolocation_GeolocationJsObject_callback = null;
}
;
_.onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_geolocation_GeolocationJsObject_onPositionSuccess__Lcom_google_gwt_core_client_JavaScriptObject_2V(position){
  var accuracy, coords, jsObj, latitude, longitude, obj, positionObj, positionString, timestamp;
  positionString = JSON.stringify(position);
  jsObj = com_google_gwt_core_client_JsonUtils_safeEval__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(positionString);
  obj = new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsObj);
  timestamp = java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ('' + com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_57).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value);
  latitude = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_58).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_51).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  longitude = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_58).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_52).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  accuracy = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(obj, $intern_58).isObject__Lcom_google_gwt_json_client_JSONObject_2(), $intern_49).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value;
  positionObj = new it_appify_api_Geoposition_Geoposition__V;
  positionObj.it_appify_api_Geoposition_timestamp = timestamp;
  coords = new it_appify_api_Coordinates_Coordinates__V;
  coords.it_appify_api_Coordinates_latitude = latitude;
  coords.it_appify_api_Coordinates_longitude = longitude;
  it_appify_api_Coordinates_$setAccuracy__Lit_appify_api_Coordinates_2IV(coords, com_google_gwt_lang_Cast_round_1int__DI(accuracy));
  positionObj.it_appify_api_Geoposition_coords = coords;
  !!this.it_appify_geolocation_GeolocationJsObject_callback && it_appify_examples_emsmobile_service_GeolocationService$2_$onPosition__Lit_appify_examples_emsmobile_service_GeolocationService$2_2Lit_appify_api_Geoposition_2V(this.it_appify_geolocation_GeolocationJsObject_callback, positionObj);
  this.it_appify_geolocation_GeolocationJsObject_callback = null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_89, 'GeolocationJsObject', 210);
function it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, $intern_53);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(214, 59, {}, it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_GeolocationJsObject_1GeoOptionsBeanMapperImpl__V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_GeoOptionsBeanJsonDeserializerImpl_GeoOptionsBeanJsonDeserializerImpl__V;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeoOptionsBeanMapperImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeoOptionsBeanJsonSerializerImpl_GeoOptionsBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_11GeoOptionsBeanMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_89, 'GeolocationJsObject_GeoOptionsBeanMapperImpl', 214);
function it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V(){
  com_github_nmorel_gwtjackson_client_AbstractObjectMapper_AbstractObjectMapper__Ljava_lang_String_2V.call(this, $intern_56);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(213, 59, {}, it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_GeolocationJsObject_1GeolocationBeanMapperImpl__V);
_.newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_newDeserializer__Lcom_github_nmorel_gwtjackson_client_JsonDeserializer_2(){
  return new it_appify_api_GeopositionBeanJsonDeserializerImpl_GeopositionBeanJsonDeserializerImpl__V;
}
;
_.newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2 = function it_appify_geolocation_GeolocationJsObject_1GeolocationBeanMapperImpl_newSerializer__Lcom_github_nmorel_gwtjackson_client_JsonSerializer_2(){
  return new it_appify_api_GeopositionBeanJsonSerializerImpl_GeopositionBeanJsonSerializerImpl__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1GeolocationJsObject_11GeolocationBeanMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_89, 'GeolocationJsObject_GeolocationBeanMapperImpl', 213);
function it_appify_geolocation_HTML5Geolocation_$getCurrentPosition__Lit_appify_geolocation_HTML5Geolocation_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static, callback){
  it_appify_geolocation_GeolocationJsObject_$getCurrentPosition__Lit_appify_geolocation_GeolocationJsObject_2Lit_appify_api_Geolocation$GeolocationCallback_2V(this$static.it_appify_geolocation_HTML5Geolocation_geolocation, callback);
}

function it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V(options){
  this.it_appify_geolocation_HTML5Geolocation_geolocation = new it_appify_geolocation_GeolocationJsObject_GeolocationJsObject__Lit_appify_api_GeoOptions_2V(options);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(203, 1, {}, it_appify_geolocation_HTML5Geolocation_HTML5Geolocation__Lit_appify_api_GeoOptions_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1geolocation_1HTML5Geolocation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_89, 'HTML5Geolocation', 203);
function it_appify_offline_HTML5ApplicationCache_$getConnetionStatus__Lit_appify_offline_HTML5ApplicationCache_2Lit_appify_api_ApplicationCache$CheckConnectedCallback_2V(this$static, callback){
  var connected;
  if (this$static.it_appify_offline_HTML5ApplicationCache_cache) {
    connected = $wnd.navigator.onLine;
    connected?it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOnline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(callback):it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOffline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(callback);
  }
   else {
    it_appify_offline_OnlineChecker_$checkOnline__Lit_appify_offline_OnlineChecker_2Lit_appify_offline_OnlineChecker$CheckOnlineCallback_2V(new it_appify_offline_HTML5ApplicationCache$2_HTML5ApplicationCache$2__Lit_appify_offline_HTML5ApplicationCache_2V(callback));
  }
}

function it_appify_offline_HTML5ApplicationCache_HTML5ApplicationCache__V(){
  this.it_appify_offline_HTML5ApplicationCache_cache = $wnd.cache;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(199, 1, {}, it_appify_offline_HTML5ApplicationCache_HTML5ApplicationCache__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1offline_1HTML5ApplicationCache_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_90, 'HTML5ApplicationCache', 199);
function it_appify_offline_HTML5ApplicationCache$2_HTML5ApplicationCache$2__Lit_appify_offline_HTML5ApplicationCache_2V(val$callback){
  this.it_appify_offline_HTML5ApplicationCache$2_val$callback2 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(200, 1, {}, it_appify_offline_HTML5ApplicationCache$2_HTML5ApplicationCache$2__Lit_appify_offline_HTML5ApplicationCache_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1offline_1HTML5ApplicationCache$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_90, 'HTML5ApplicationCache/2', 200);
function it_appify_offline_OnlineChecker_$checkOnline__Lit_appify_offline_OnlineChecker_2Lit_appify_offline_OnlineChecker$CheckOnlineCallback_2V(callback){
  var builder, url_0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0;
  url_0 = (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = $doc.location.href , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.indexOf('#') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.indexOf('?') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.lastIndexOf('/') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.length > 0?com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 + '/':'') + 'online.json';
  builder = new com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V((com_google_gwt_http_client_RequestBuilder_$clinit__V() , com_google_gwt_http_client_RequestBuilder_GET), url_0);
  builder.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 5000;
  com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(builder, new it_appify_offline_OnlineChecker$1_OnlineChecker$1__Lit_appify_offline_OnlineChecker_2V(callback));
  try {
    com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', builder.com_google_gwt_http_client_RequestBuilder_callback);
    com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(builder, builder.com_google_gwt_http_client_RequestBuilder_requestData, builder.com_google_gwt_http_client_RequestBuilder_callback);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 39))
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function it_appify_offline_OnlineChecker$1_$onError__Lit_appify_offline_OnlineChecker$1_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static){
  it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOffline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static.it_appify_offline_OnlineChecker$1_val$callback2.it_appify_offline_HTML5ApplicationCache$2_val$callback2);
}

function it_appify_offline_OnlineChecker$1_$onResponseReceived__Lit_appify_offline_OnlineChecker$1_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(this$static, response){
  var flag, isOnline, value_0;
  try {
    value_0 = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText));
    flag = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
    isOnline = (java_lang_Boolean_$clinit__V() , java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_5, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(flag, 'online').isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value)?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE).java_lang_Boolean_value;
    isOnline?it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOnline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static.it_appify_offline_OnlineChecker$1_val$callback2.it_appify_offline_HTML5ApplicationCache$2_val$callback2):it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOffline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static.it_appify_offline_OnlineChecker$1_val$callback2.it_appify_offline_HTML5ApplicationCache$2_val$callback2);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 11)) {
      it_appify_examples_emsmobile_service_ConnectionStateService$2_$onOffline__Lit_appify_examples_emsmobile_service_ConnectionStateService$2_2V(this$static.it_appify_offline_OnlineChecker$1_val$callback2.it_appify_offline_HTML5ApplicationCache$2_val$callback2);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function it_appify_offline_OnlineChecker$1_OnlineChecker$1__Lit_appify_offline_OnlineChecker_2V(val$callback){
  this.it_appify_offline_OnlineChecker$1_val$callback2 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 1, {}, it_appify_offline_OnlineChecker$1_OnlineChecker$1__Lit_appify_offline_OnlineChecker_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1offline_1OnlineChecker$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_90, 'OnlineChecker/1', 201);
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

function it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V(){
  this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen = (!this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen && (this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen = it_appify_screenorientation_ScreenOrientationJsObject_$_1getFullScreenObject__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2()) , this.it_appify_screenorientation_ScreenOrientationJsObject_fullscreen);
  $wnd.screen;
  it_appify_screenorientation_ScreenOrientationJsObject_$_1getScreenOrientation__Lit_appify_screenorientation_ScreenOrientationJsObject_2Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(215, 1, {}, it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1screenorientation_1ScreenOrientationJsObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_91, 'ScreenOrientationJsObject', 215);
function it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V(){
  new it_appify_screenorientation_ScreenOrientationJsObject_ScreenOrientationJsObject__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(211, 1, {}, it_appify_screenorientation_WebScreenOrientationImpl_WebScreenOrientationImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1screenorientation_1WebScreenOrientationImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_91, 'WebScreenOrientationImpl', 211);
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

function it_appify_view_AppJsPageManager_$_1getMenuState__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2(){
  if (typeof $wnd.snapper != $intern_92) {
    return $wnd.snapper.state().state;
  }
}

function it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0){
  var that = this$static;
  try {
    $wnd.App.load(name_0, function(){
      console.log($intern_93 + name_0);
    }
    );
  }
   catch (err) {
    console.log(err);
  }
}

function it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, transition){
  var that = this$static;
  try {
    $wnd.App.load(name_0, transition, function(){
      console.log($intern_93 + name_0);
    }
    );
  }
   catch (err) {
    console.log(err);
  }
}

function it_appify_view_AppJsPageManager_$closeContextMenu__Lit_appify_view_AppJsPageManager_2V(this$static){
  if (this$static.it_appify_view_AppJsPageManager_menuOpened != null) {
    typeof $wnd.snapper != $intern_92 && $wnd.snapper.close();
    this$static.it_appify_view_AppJsPageManager_menuOpened = null;
  }
}

function it_appify_view_AppJsPageManager_$getCurrentPage__Lit_appify_view_AppJsPageManager_2Lit_appify_api_Page_2(this$static){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_AppJsPageManager_pages, this$static.it_appify_view_AppJsPageManager_currentPage), 77);
}

function it_appify_view_AppJsPageManager_$setPageListener__Lit_appify_view_AppJsPageManager_2Lit_appify_api_PageManager$PageListener_2V(this$static, pageListener){
  this$static.it_appify_view_AppJsPageManager_listener = pageListener;
}

function it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0){
  it_appify_view_AppJsPageManager_$_1addPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0);
  it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, name_0);
}

function it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, pageName, transitionType){
  it_appify_view_AppJsPageManager_$_1addPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this$static, pageName);
  it_appify_view_AppJsPageManager_$_1showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, pageName, transitionType);
}

function it_appify_view_AppJsPageManager_AppJsPageManager__V(){
  this.it_appify_view_AppJsPageManager_pages = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(141, 1, {}, it_appify_view_AppJsPageManager_AppJsPageManager__V);
_.private$it_appify_view_AppJsPageManager$onPageCreated__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageCreated__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(pageName, e){
  var currentPage, el;
  currentPage = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, pageName), 77);
  el = e;
  !currentPage?(currentPage = new it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el)):(currentPage.it_appify_view_WebPage_pageElement = el);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, $intern_83, currentPage);
  !!this.it_appify_view_AppJsPageManager_listener && it_appify_view_PageLoader$1_$onPageCreate__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this.it_appify_view_AppJsPageManager_listener, currentPage);
}
;
_.private$it_appify_view_AppJsPageManager$onPageHidden__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageHidden__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(name_0, e){
  var p;
  p = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0), 77);
  java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0);
  !!this.it_appify_view_AppJsPageManager_listener && 'PageLoader onPageHide: ' + p.it_appify_view_WebPage_pageElement.id;
}
;
_.private$it_appify_view_AppJsPageManager$onPageShowed__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V = function it_appify_view_AppJsPageManager_onPageShowed__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(name_0, e){
  var currentPage, el;
  currentPage = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, name_0), 77);
  el = e;
  !currentPage?(currentPage = new it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el)):(currentPage.it_appify_view_WebPage_pageElement = el);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, $intern_83, currentPage);
  'AppJsPageManager onPageShow: ' + currentPage.it_appify_view_WebPage_pageElement.id;
  this.it_appify_view_AppJsPageManager_currentPage = currentPage.it_appify_view_WebPage_pageElement.id;
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.it_appify_view_AppJsPageManager_pages, currentPage.it_appify_view_WebPage_pageElement.id, currentPage);
  !!this.it_appify_view_AppJsPageManager_listener && it_appify_view_PageLoader$1_$onPageShow__Lit_appify_view_PageLoader$1_2Lit_appify_api_Page_2V(this.it_appify_view_AppJsPageManager_listener, currentPage);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1AppJsPageManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AppJsPageManager', 141);
function it_appify_view_PageLoader_$loadPage__Lit_appify_view_PageLoader_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_util_List_2V(this$static, pageId, model, handlers){
  var pageHandlers;
  if (handlers) {
    pageHandlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 14);
    if (!pageHandlers) {
      pageHandlers = new java_util_ArrayList_ArrayList__V;
      java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId, pageHandlers);
    }
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 14).clear__V();
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader_pageHandlers, pageId), 14).addAll__Ljava_util_Collection_2Z(handlers);
  }
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleIncremental__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), new it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V(this$static, pageId, model));
}

function it_appify_view_PageLoader_$setCurrentTransition__Lit_appify_view_PageLoader_2Ljava_lang_String_2V(this$static, currentTransition){
  this$static.it_appify_view_PageLoader_currentTransition = currentTransition;
}

function it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V(pm, vm, pl){
  this.it_appify_view_PageLoader_pl = new it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V(this);
  this.it_appify_view_PageLoader_pageHandlers = new java_util_HashMap_HashMap__V;
  this.it_appify_view_PageLoader_pm = pm;
  this.it_appify_view_PageLoader_vm = vm;
  it_appify_view_AppJsPageManager_$setPageListener__Lit_appify_view_AppJsPageManager_2Lit_appify_api_PageManager$PageListener_2V(pm, this.it_appify_view_PageLoader_pl);
  this.it_appify_view_PageLoader_outerPl = pl;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(142, 1, {}, it_appify_view_PageLoader_PageLoader__Lit_appify_api_PageManager_2Lit_appify_api_ModelView_2Lit_appify_api_PageManager$PageListener_2V);
_.it_appify_view_PageLoader_currentTransition = null;
_.it_appify_view_PageLoader_outerPl = null;
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'PageLoader', 142);
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
  h = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_pageHandlers, page.it_appify_view_WebPage_pageElement.id), 14);
  if (h) {
    for (viewHandlerHolder$iterator = h.iterator__Ljava_util_Iterator_2(); viewHandlerHolder$iterator.hasNext__Z();) {
      viewHandlerHolder = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(viewHandlerHolder$iterator.next__Ljava_lang_Object_2(), 56);
      it_appify_view_WebPage_$addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(page, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_viewId, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_eventType, viewHandlerHolder.it_appify_api_HasViewHandlers$ViewHandlerHolder_handler);
    }
  }
  !!this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_outerPl && it_appify_app_AbstractWebApp$1_$onPageShow__Lit_appify_app_AbstractWebApp$1_2Lit_appify_api_Page_2V(this$static.it_appify_view_PageLoader$1_this$01.it_appify_view_PageLoader_outerPl, page);
}

function it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V(this$0){
  this.it_appify_view_PageLoader$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(143, 1, {}, it_appify_view_PageLoader$1_PageLoader$1__Lit_appify_view_PageLoader_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'PageLoader/1', 143);
function it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V(this$0, val$pageId, val$model){
  this.it_appify_view_PageLoader$2_this$01 = this$0;
  this.it_appify_view_PageLoader$2_val$pageId2 = val$pageId;
  this.it_appify_view_PageLoader$2_val$model3 = val$model;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(144, 1, {}, it_appify_view_PageLoader$2_PageLoader$2__Lit_appify_view_PageLoader_2V);
_.execute__Z = function it_appify_view_PageLoader$2_execute__Z(){
  if (!this.it_appify_view_PageLoader$2__1showed) {
    this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_currentTransition == null?it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2V(this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_pm, this.it_appify_view_PageLoader$2_val$pageId2):it_appify_view_AppJsPageManager_$showPage__Lit_appify_view_AppJsPageManager_2Ljava_lang_String_2Ljava_lang_String_2V(this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_pm, this.it_appify_view_PageLoader$2_val$pageId2, this.it_appify_view_PageLoader$2_this$01.it_appify_view_PageLoader_currentTransition);
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
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1PageLoader$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'PageLoader/2', 144);
function it_appify_view_WebPage_$_1addViewHandler__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Lit_appify_api_HasViewHandlers$ViewHandler_2V(this$static, id_0, type_0, p, h){
  var that = this$static;
  $wnd.$(p).find(id_0).on(type_0, function(){
    h.onEvent__Ljava_lang_String_2Ljava_lang_String_2V(type_0, id_0);
  }
  );
}

function it_appify_view_WebPage_$_1popover__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V(viewId, title_0, content, animation){
  $wnd.currentPopover = $wnd.$('#' + viewId).webuiPopover('destroy').webuiPopover({title:title_0, content:content, animation:animation, placement:'auto', width:'auto', height:'auto', trigger:'click', style:'', constrains:null, animation:animation, delay:{show:null, hide:300}, async:{before:function(that, xhr){
  }
  , success:function(that, data_0){
  }
  }, cache:false, multi:true, arrow:true, padding:true, type:'html', url:''});
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

function it_appify_view_WebPage_$getElementInPage__Lit_appify_view_WebPage_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(this$static, elemId){
  var obj;
  obj = this$static.it_appify_view_WebPage_pageElement;
  return $wnd.$(obj).find('#' + elemId)[0];
}

function it_appify_view_WebPage_$toggleClassViewStyle__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V(){
  var it_appify_view_WebPage_$_1toggleClassOnElem__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V_el_0;
  it_appify_view_WebPage_$_1toggleClassOnElem__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V_el_0 = $doc.getElementById('waitModal');
  it_appify_view_WebPage_$_1toggleClassOnElem__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V_el_0 != $intern_92 && $wnd.classie.toggle(it_appify_view_WebPage_$_1toggleClassOnElem__Lit_appify_view_WebPage_2Ljava_lang_String_2Ljava_lang_String_2V_el_0, 'active');
}

function it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V(el){
  this.it_appify_view_WebPage_pageElement = el;
  this.it_appify_view_WebPage_handlers = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(85, 1, {77:1}, it_appify_view_WebPage_WebPage__Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lit_1appify_1view_1WebPage_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'WebPage', 85);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(65, 1, {});
_.toString__Ljava_lang_String_2$ = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AbstractStringBuilder', 65);
function java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'divide by zero');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(103, 5, $intern_10, java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArithmeticException', 103);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(42, 5, $intern_10, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IndexOutOfBoundsException', 42);
function java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V(){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(159, 42, $intern_10, java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArrayIndexOutOfBoundsException', 159);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(50, 5, $intern_10, java_lang_ArrayStoreException_ArrayStoreException__V, java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArrayStoreException', 50);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Boolean_FALSE = new java_lang_Boolean_Boolean__ZV(false);
  java_lang_Boolean_TRUE = new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_Boolean__ZV(value_0){
  this.java_lang_Boolean_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(31, 1, {3:1, 31:1, 49:1}, java_lang_Boolean_Boolean__ZV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 31) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 31).java_lang_Boolean_value == this.java_lang_Boolean_value;
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Boolean', 31);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(43, 5, $intern_10, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ClassCastException', 43);
function java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(s){
  var java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0;
  if (!(java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 = java_lang_Number_floatRegex , !java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 && (java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0 = java_lang_Number_floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/) , java_lang_Number__1_1isValidDouble__Ljava_lang_String_2Z_floatRegex_0.test(s))) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + s + '"');
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
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + s + '"');
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
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > (java_lang_Number$_1_1ParseLong_$clinit__V() , java_lang_Number$_1_1ParseLong_maxLengthForRadix)[10]) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
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
        throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
      }
      toReturn = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, radixPower);
    }
    toReturn = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(head));
  }
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
  }
  if (!negative) {
    toReturn = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn);
    if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_94 + orig + '"');
    }
  }
  return toReturn;
}

function java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s, radix){
  return parseInt(s, radix);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(44, 1, {3:1, 44:1});
var java_lang_Number_floatRegex;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Number', 44);
function java_lang_Double_Double__DV(value_0){
  this.java_lang_Double_value = value_0;
}

function java_lang_Double_isInfinite__DZ(x_0){
  return !isFinite(x_0) && !isNaN(x_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(19, 44, {3:1, 49:1, 19:1, 44:1}, java_lang_Double_Double__DV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Double_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 19) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 19).java_lang_Double_value == this.java_lang_Double_value;
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Double', 19);
function java_lang_IllegalArgumentException_IllegalArgumentException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(22, 5, $intern_10, java_lang_IllegalArgumentException_IllegalArgumentException__V, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalArgumentException', 22);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(12, 5, $intern_10, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalStateException', 12);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(18, 44, {3:1, 49:1, 18:1, 44:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 18) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 18).java_lang_Integer_value == this.java_lang_Integer_value;
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Integer', 18);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_14, 18, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Long_Long__JV(value_0){
  this.java_lang_Long_value = value_0;
}

function java_lang_Long_valueOf__JLjava_lang_Long_2(i){
  var rebase, result;
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:4194175, m:$intern_38, h:$intern_39}) && com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:128, m:0, h:0})) {
    rebase = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(i) + 128;
    result = (java_lang_Long$BoxedValues_$clinit__V() , java_lang_Long$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Long$BoxedValues_boxedValues[rebase] = new java_lang_Long_Long__JV(i));
    return result;
  }
  return new java_lang_Long_Long__JV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(28, 44, {3:1, 49:1, 28:1, 44:1}, java_lang_Long_Long__JV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Long_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 28) && com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 28).java_lang_Long_value, this.java_lang_Long_value);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Long', 28);
function java_lang_Long$BoxedValues_$clinit__V(){
  java_lang_Long$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Long$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit, $intern_14, 28, 256, 0, 1);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(30, 5, $intern_10, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'NullPointerException', 30);
function java_lang_Number$_1_1ParseLong_$clinit__V(){
  java_lang_Number$_1_1ParseLong_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var i;
  java_lang_Number$_1_1ParseLong_maxDigitsForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  java_lang_Number$_1_1ParseLong_maxDigitsRadixPower = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_14, 0, 37, 7, 1);
  java_lang_Number$_1_1ParseLong_maxLengthForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  java_lang_Number$_1_1ParseLong_maxValueForRadix = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_J_1classLit, $intern_14, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i] = com_google_gwt_lang_Cast_round_1int__DI(java_lang_Math_pow__DDD(i, java_lang_Number$_1_1ParseLong_maxDigitsForRadix[i]));
    java_lang_Number$_1_1ParseLong_maxValueForRadix[i] = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2({l:$intern_38, m:$intern_38, h:524287}, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i]));
  }
}

var java_lang_Number$_1_1ParseLong_maxDigitsForRadix, java_lang_Number$_1_1ParseLong_maxDigitsRadixPower, java_lang_Number$_1_1ParseLong_maxLengthForRadix, java_lang_Number$_1_1ParseLong_maxValueForRadix;
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13, 22, {3:1, 11:1, 13:1, 5:1, 6:1}, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'NumberFormatException', 13);
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

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
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

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'String', 2);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(32, 65, {332:1}, java_lang_StringBuilder_StringBuilder__V, java_lang_StringBuilder_StringBuilder__IV, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'StringBuilder', 32);
function java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV(index_0){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V.call(this, 'String index out of range: ' + index_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(75, 42, $intern_10, java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'StringIndexOutOfBoundsException', 75);
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
    srcArray = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, 333);
    destArray = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(dest, 333);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(58, 5, $intern_10, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'UnsupportedOperationException', 58);
function java_math_BigInteger_$clinit__V(){
  java_math_BigInteger_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var i;
  java_math_BigInteger_ONE = new java_math_BigInteger_BigInteger__IIV(1, 1);
  java_math_BigInteger_TEN = new java_math_BigInteger_BigInteger__IIV(1, 10);
  java_math_BigInteger_ZERO = new java_math_BigInteger_BigInteger__IIV(0, 0);
  java_math_BigInteger_MINUS_1ONE = new java_math_BigInteger_BigInteger__IIV(-1, 1);
  java_math_BigInteger_SMALL_1VALUES = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, 1), $intern_14, 10, 0, [java_math_BigInteger_ZERO, java_math_BigInteger_ONE, new java_math_BigInteger_BigInteger__IIV(1, 2), new java_math_BigInteger_BigInteger__IIV(1, 3), new java_math_BigInteger_BigInteger__IIV(1, 4), new java_math_BigInteger_BigInteger__IIV(1, 5), new java_math_BigInteger_BigInteger__IIV(1, 6), new java_math_BigInteger_BigInteger__IIV(1, 7), new java_math_BigInteger_BigInteger__IIV(1, 8), new java_math_BigInteger_BigInteger__IIV(1, 9), java_math_BigInteger_TEN]);
  java_math_BigInteger_TWO_1POWS = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 10, 32, 0, 1);
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
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(val, {l:0, m:4193280, h:$intern_39}), {l:0, m:0, h:0})) {
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
    if (com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(val, {l:$intern_38, m:$intern_38, h:$intern_39})) {
      return new java_math_BigInteger_BigInteger__IJV(-1, com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(val));
    }
    return java_math_BigInteger_MINUS_1ONE;
  }
   else 
    return com_google_gwt_lang_LongLib_lte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(val, {l:10, m:0, h:0})?java_math_BigInteger_SMALL_1VALUES[com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(val)]:new java_math_BigInteger_BigInteger__IJV(1, val);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(10, 44, {3:1, 49:1, 44:1, 10:1}, java_math_BigInteger_BigInteger__IIV, java_math_BigInteger_BigInteger__II_3IV, java_math_BigInteger_BigInteger__IJV, java_math_BigInteger_BigInteger__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function java_math_BigInteger_equals__Ljava_lang_Object_2Z(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(x_0, 10)) {
    x1 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(x_0, 10);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('java.math', 'BigInteger', 10);
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
  java_math_Conversion_bigRadices = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_14, 0, 7, [-2147483648, 1162261467, $intern_95, 1220703125, 362797056, 1977326743, $intern_95, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, $intern_95, 1291467969, 1544804416, 1838265625, 60466176]);
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
  return com_google_gwt_lang_LongLib_or__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(rem, 32), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(quot, {l:$intern_38, m:1023, h:0}));
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
      v = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(highDigit), {l:$intern_38, m:1023, h:0});
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
        temp1 = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(result11, 32), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(temp[i1]), {l:$intern_38, m:1023, h:0}));
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
    a = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op1.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0});
    b = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op2.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0});
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
  carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[0]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[0]), {l:$intern_38, m:1023, h:0}));
  res[0] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
  carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_38, m:1023, h:0})));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_38, m:1023, h:0})));
      res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_38, m:1023, h:0}));
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
  return i < 0?0:com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_38, m:1023, h:0}))?-1:1;
}

function java_math_Elementary_inplaceAdd___3IIII(a, aSize, addend){
  var carry, i;
  carry = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(addend), {l:$intern_38, m:1023, h:0});
  for (i = 0; com_google_gwt_lang_LongLib_neq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(carry, {l:0, m:0, h:0}) && i < aSize; i++) {
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}));
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
    a = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op1.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0});
    b = com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(op2.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0});
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
    borrow = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[i]), {l:$intern_38, m:1023, h:0})));
    res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(borrow);
    borrow = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}));
    res[i] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(borrow);
    borrow = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(borrow, 32);
  }
}

function java_math_Multiplication_$clinit__V(){
  java_math_Multiplication_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var fivePow, i;
  java_math_Multiplication_bigFivePows = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 10, 32, 0, 1);
  java_math_Multiplication_bigTenPows = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1math_1BigInteger_12_1classLit, $intern_14, 10, 32, 0, 1);
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
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(aI), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b[j]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(t[i + j]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_38, m:1023, h:0}));
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
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(factor), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_38, m:1023, h:0}));
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
    val = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b.java_math_BigInteger_digits[0]), {l:$intern_38, m:1023, h:0}));
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
      carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i0]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[j]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[i0 + j]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_38, m:1023, h:0}));
      res[i0 + j] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
      carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    }
    res[i0 + aLen] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
  }
  java_math_BitLevel_shiftLeftOneBit___3I_3IIV(res, res, aLen << 1);
  carry = {l:0, m:0, h:0};
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0}), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a[i]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[index_0]), {l:$intern_38, m:1023, h:0})), com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry)), {l:$intern_38, m:1023, h:0}));
    res[index_0] = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(carry);
    carry = com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, 32);
    ++index_0;
    carry = com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(carry, com_google_gwt_lang_LongLib_and__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(res[index_0]), {l:$intern_38, m:1023, h:0}));
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(319, 1, {24:1});
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractCollection', 319);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(318, 1, {76:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 76)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 76);
  if (this.java_util_AbstractHashMap_size != otherMap.java_util_AbstractHashMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , entry$iterator.java_util_AbstractHashMap$EntrySetIterator_last = entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 16));
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
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , entry$iterator.java_util_AbstractHashMap$EntrySetIterator_last = entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 16));
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()));
    sb.java_lang_AbstractStringBuilder_string += '=';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMap', 318);
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

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(66, 318, {76:1});
_.java_util_AbstractHashMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractHashMap', 66);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(320, 319, $intern_97);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 53)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 53);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractSet', 320);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 16)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 16));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(45, 320, $intern_97, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
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
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 16).getKey__Ljava_lang_Object_2();
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractHashMap/EntrySet', 45);
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
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static)) , this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 16);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(46, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractHashMap/EntrySetIterator', 46);
function java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.java_util_Arrays$ArrayList_array.length; i < n; ++i) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(toFind, (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, this$static.java_util_Arrays$ArrayList_array.length) , this$static.java_util_Arrays$ArrayList_array[i]))) {
      return i;
    }
  }
  return -1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(321, 319, {24:1, 14:1});
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
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 14)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 14);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractList', 321);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(57, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractList/IteratorImpl', 57);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(125, 57, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractList/ListIteratorImpl', 125);
function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01);
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}

function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(79, 320, $intern_97, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMap/1', 79);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(102, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMap/1/1', 102);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(100, 1, $intern_98);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 16)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 16);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMap/AbstractEntry', 100);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(101, 100, $intern_98, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMap/SimpleEntry', 101);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(322, 1, $intern_98);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 16)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 16);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'AbstractMapEntry', 322);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(26, 321, $intern_99, java_util_ArrayList_ArrayList__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'ArrayList', 26);
function java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(array){
  this.java_util_Arrays$ArrayList_array = array;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(83, 321, $intern_99, java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_Arrays$ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this, o) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Arrays$ArrayList_get__ILjava_lang_Object_2(index_0){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this.java_util_Arrays$ArrayList_array.length) , this.java_util_Arrays$ArrayList_array[index_0];
}
;
_.size__I = function java_util_Arrays$ArrayList_size__I(){
  return this.java_util_Arrays$ArrayList_array.length;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_Arrays$ArrayList_toArray___3Ljava_lang_Object_2(){
  return com_google_gwt_lang_Array_clone___3Ljava_lang_Object_2_3Ljava_lang_Object_2(this.java_util_Arrays$ArrayList_array);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_Arrays$ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  var i, size_0;
  size_0 = this.java_util_Arrays$ArrayList_array.length;
  out.length < size_0 && (out = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(out, size_0));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this.java_util_Arrays$ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Arrays$ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'Arrays/ArrayList', 83);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(123, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'Collections/EmptyListIterator', 123);
function java_util_Collections$EmptySet_Collections$EmptySet__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(124, 320, $intern_100, java_util_Collections$EmptySet_Collections$EmptySet__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'Collections/EmptySet', 124);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(160, 5, $intern_10, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'ConcurrentModificationException', 160);
function java_util_EmptyStackException_EmptyStackException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(207, 5, $intern_10, java_util_EmptyStackException_EmptyStackException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1EmptyStackException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'EmptyStackException', 207);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(33, 66, {3:1, 76:1}, java_util_HashMap_HashMap__V, java_util_HashMap_HashMap__IV);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'HashMap', 33);
function java_util_HashSet_HashSet__Ljava_util_Collection_2V(c){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__IV;
  java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(212, 320, $intern_100, java_util_HashSet_HashSet__Ljava_util_Collection_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'HashSet', 212);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(82, 1, {}, java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap_entries__Ljava_util_Iterator_2(){
  return new java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsHashCodeMap', 82);
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
  this.java_util_InternalJsHashCodeMap$1_chain = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit, $intern_14, 16, 0, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(135, 1, {}, java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsHashCodeMap/1', 135);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V(){
  java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(133, 82, {}, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 133);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this$1){
  this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(134, 26, $intern_99, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 16) , java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2()) , java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 134);
function java_util_InternalJsMapFactory_InternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(130, 1, {}, java_util_InternalJsMapFactory_InternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap_InternalJsStringMap__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsMapFactory', 130);
function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2();
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z(){
  var protoField = $intern_101;
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
    return (java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0 = Object.create(null) , java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0[$intern_101] = 42 , Object.getOwnPropertyNames(java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0).length == 0)?new java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V:new java_util_InternalJsMapFactory_InternalJsMapFactory__V;
  }
  return new java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V;
}

var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate;
function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(132, 130, {}, java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V);
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$KeysWorkaroundJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 132);
function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(131, 130, {}, java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$LegacyInternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsMapFactory/LegacyInternalJsMapFactory', 131);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(67, 1, {}, java_util_InternalJsStringMap_InternalJsStringMap__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap', 67);
function java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this$0, val$keys){
  this.java_util_InternalJsStringMap$1_this$01 = this$0;
  this.java_util_InternalJsStringMap$1_val$keys2 = val$keys;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(129, 1, {}, java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap/1', 129);
function java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this$0, val$key){
  this.java_util_InternalJsStringMap$2_this$01 = this$0;
  this.java_util_InternalJsStringMap$2_val$key2 = val$key;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(81, 322, $intern_98, java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap/2', 81);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(126, 67, {}, java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap/InternalJsStringMapLegacy', 126);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this$1){
  this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(128, 26, $intern_99, java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 16) , java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11, ':' + com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2())) , java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap/InternalJsStringMapLegacy/1', 128);
function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(127, 67, {}, java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V);
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_keys___3Ljava_lang_String_2(){
  var keys_0;
  keys_0 = java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
  !(this.java_util_InternalJsStringMap_backingMap[$intern_101] === undefined) && (keys_0[keys_0.length] = $intern_101);
  return keys_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 127);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_96, 'Map/Entry');
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(84, 5, $intern_10, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'NoSuchElementException', 84);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(139, 321, $intern_99);
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
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'Vector', 139);
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

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(140, 139, $intern_99, java_util_Stack_Stack__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_96, 'Stack', 140);
var com_google_gwt_lang_ClassLiteralHolder_I_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('int', 'I'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1CollapsedPropertyHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_102, 'CollapsedPropertyHolder', 307), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1JavaClassHierarchySetupUtil_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_102, 'JavaClassHierarchySetupUtil', 309), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_102, 'LongLibBase/LongEmul', null), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1ModuleUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_102, 'ModuleUtils', 312), com_google_gwt_lang_ClassLiteralHolder_J_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('long', 'J'), com_google_gwt_lang_ClassLiteralHolder_C_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('char', 'C'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_96, 'Map/Entry');
var $entry = com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2();
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_it_100046appify_100046examples_100046EmsMobile_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=emsmobile-0.js

