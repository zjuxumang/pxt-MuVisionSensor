//% color="#ff6600" weight=20 icon="\uf085"
namespace MuVisionSensor {
    export enum SENSORS {
        //% block="MU00"
        MU00,
        //% block="MU01"
        MU01,
        //% block="MU10"
        MU10,
        //% block="MU11"
        MU11
    }
    export enum PORT {
        //% blockId=Port_I2C block="I2C"
        I2C=1,
        //% blockId=Port_Serial block="Serial"
        Serial=0,
    }
    export enum VISION_TYPE {
        //% block="🌈 Color Detect"
        VISION_COLOR_DETECT=1,
        //% block="🌈 Color Recognize"
        VISION_COLOR_RECOGNITION=2,
        //% block="⚽ Ball Detect"
        VISION_BALL_DETECT=3,
        //% block="👥 Body Detect"
        VISION_BODY_DETECT=5,
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT=8
    }
    export enum _VISION_TYPE {
        //% block="🌈 Color Detect"
        VISION_COLOR_DETECT=1,
        //% block="⚽ Ball Detect"
        VISION_BALL_DETECT=3,
        //% block="👥 Body Detect"
        VISION_BODY_DETECT=5,
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT=8
    }
    export enum CARD_TYPE {
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT
    }
    export enum TRAFFIC_CARD_TYPE {
        //% block="⬆ Forward"
        TRAFFIC_CARD_FORWARD=1,
        //% block="⬅ Left"
        TRAFFIC_CARD_LEFT,
        //% block="➡ Right"
        TRAFFIC_CARD_RIGHT,
        //% block="🔙 Turn Around"
        TRAFFIC_CARD_TURN_AROUND,
        //% block="🅿️ Stop"
        TRAFFIC_CARD_PARK
    }
    export enum SHAPE_CARD_TYPE {
        //% block="✔ tick"
        SHAPE_CARD_TICK=1,
        //% block="✖ cross"
        SHAPE_CARD_CROSS,
        //% block="⭕ circle"
        SHAPE_CARD_CIRCLE,
        //% block="◻ square"
        SHAPE_CARD_SQUARE,
        //% block="🛆 triangle"
        SHAPE_CARD_TRIANGLE
    }
    export enum LED_COLOR_TYPE {
        //% block="off"
        LED_BLACK=0,
        //% block="red"
        LED_RED,
        //% block="green"
        LED_GREEN,
        //% block="blue"
        LED_BLUE,
        //% block="yellow"
        LED_YELLOW,
        //% block="purple"
        LED_PURPLE,
        //% block="cayan"
        LED_CYAN,
        //% block="white"
        LED_WHITE
    }
    export enum COLOR_TYPE {
        //% block="black"
        BLACK=1,
        //% block="white"
        WHITE,
        //% block="red"
        RED,
        //% block="yellow"
        YELLOW,
        //% block="green"
        GREEN,
        //% block="cayan"
        CYAN,
        //% block="blue"
        BLUE,
        //% block="purple"
        PURPLE,
        //% block="others"
        UNKOWN=0
    }
    export enum NUM_CARD_TYPE {
        //% block="1"
        NUM_CARD_1=1,
        //% block="2"
        NUM_CARD_2,
        //% block="3"
        NUM_CARD_3,
        //% block="4"
        NUM_CARD_4,
        //% block="5"
        NUM_CARD_5,
        //% block="6"
        NUM_CARD_6,
        //% block="7"
        NUM_CARD_7,
        //% block="8"
        NUM_CARD_8,
        //% block="9"
        NUM_CARD_9,
        //% block="0"
        NUM_CARD_0,
    }
    export enum VisionLevel {
        //% block="Auto"
        LEVEL_AUTO=0,
        //% block="Speed"
        LEVEL_HIGH_SPEED,
        //% block="Balance"
        LEVEL_NORMAL,
        //% block="Accuracy"
        LEVEL_HIGH_ACCURACY
    }
    export enum VisionZoom {
        //% block="Auto"
        Default,
        //% block="Level1"
        LEVEL_1,
        //% block="Level2"
        LEVEL_2,
        //% block="Level3"
        LEVEL_3,
        //% block="Level4"
        LEVEL_4,
        //% block="Level5"
        LEVEL_5
    }
    export enum BaudRate {
        //% block="9600"
        BR_9600=0,
        //% block="19200"
        BR_19200,
        //% block="38400"
        BR_38400,
        //% block="57600"
        BR_57600,
        //% block="115200"
        BR_115200,
        //% block="230400"
        BR_230400,
        //% block="460800"
        BR_460800,
        //% block="921600"
        BR_921600
    }
    export enum WBMODE {
        //% block="Auto"
        WB_AUTO,
        //% block="Lock"
        WB_LOCK,
        //% block="white"
        WB_WHITE,
        //% block="yellow"
        WB_WARM
    }
    export enum Params {
        //% block="x position"
        X_POS=1,
        //% block="y position"
        Y_POS,
        //% block="width"
        WIDTH,
        //% block="height"
        HEIGHT,
        //% block="label"
        LABLE
    }
    export enum ColorParams {
        //% block="red channel"
        Red_channal=1,
        //% block="grenn channel"
        Green_channal,
        //% block="blue channel"
        Blue_channal,
        //% block="label"
        LABLE
    }
    export enum DIR {
        //%blockId=DIR_X block="X"
        X = 0,
        //%blockId=DIR_Y block="Y"
        Y
    }

    export enum LEDS {
        //% block="1"
        LED1=0,
        //% block="2"
        LED2
    }

    export enum ENABLES {
        //% block="Enable"
        enable=1,
        //% block="Disable"
        disable=0
    }
    /**
     * Help goes here.
     */
    //% blockId=mu_init block="Init%id|Interface%port"
    //% weight=100 
    //% shim=muvs::begin
    //% group="Settings"
    export function begin(id:SENSORS,port:PORT){
        return
    }
    //% blockId=MU_reset block="%id|Reset to Default"
    //% weight=99
    //% shim=muvs::reset
    //% group="Settings"
    export function reset(id:SENSORS) {
        return
    }
    
    //% blockId=MU_set_led block="%id|LED %led|when detect %detected_color|when undetect %undetected_color"
    //% level.defl=1 level.min=0 level.max=15
    //% weight=98 inlineInputMode=inline
    //% shim=muvs::set_led
    //% group="Settings" advanced=true
    export function set_led(id:SENSORS,led:LEDS,detected_color:LED_COLOR_TYPE,undetected_color:LED_COLOR_TYPE) {
        return
    }
    
    //% blockId=MU_VisionBegin block="%id|%enable|Algorithm%type"
    //% weight=97
    //% shim=muvs::VisionBegin
    //% group="Settings"
    export function VisionBegin(id:SENSORS,enable:ENABLES,type:VISION_TYPE) {
        return
    }
    //% blockId=MU_set_level block="%id|Set Algorithm%VISION_TYPE|Level%level"
    //% weight=96
    //% shim=muvs::set_level
    //% group="Settings" advanced=true
    export function set_level(id:SENSORS,type:VISION_TYPE,level:VisionLevel) {
        return 
    }
    //% blockId=MU_set_zoom block="%id|Digital Zoom%level"
    //% weight=95
    //% shim=muvs::set_zoom
    //% group="Settings" advanced=true
    export function set_zoom(id:SENSORS,level:VisionZoom) {
        return 
    }
    
    //% blockId=MU_set_baudrate block="%id|Set Baudrate%baudrate"
    //% weight=94
    //% shim=muvs::set_baudrate
    //% group="Settings" advanced=true
    export function set_baudrate(id:SENSORS,baud:BaudRate) {
        return 
    }
    //% blockId=MU_set_awb block="%id|Set white balance%level"
    //% weight=93
    //% shim=muvs::set_WB
    //% group="Settings" advanced=true
    export function set_WB(id:SENSORS,awb:WBMODE) {
        return 
    }
    //% block="%id|High FPS mode$on"
    //% shim=muvs::onOff
    //% on.shadow="toggleOnOff" group="Settings" advanced=true
    export function onOff(id:SENSORS,on: boolean) {
        return 
    }
    //% block="%id|Is detected%type" color="#2E8B57"
    //% shim=muvs::detected
    //% group="Functions"
    export function detected(id:SENSORS,type:VISION_TYPE):boolean{
        return true
    }
    //% block="%id|Is detected 🌈 Color Recognize x=%x|y=%y" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorRCGLabel
    //% group="Functions"
    export function MuVs2GetColorRCGLabel(id:SENSORS,x:number,y:number):boolean{
        return true
    }
    //% block="%id|Is detected 🌈 Color Detect Color=%color" color="#2E8B57"
    //% shim=muvs::MuVs2GetColorDetectLabel
    //% group="Functions"
    export function MuVs2GetColorDetectLabel(id:SENSORS,label:COLOR_TYPE):boolean{
        return true
    }
    //% block="Get%id|Algorithm%type|%item" color="#2E8B57"
    //% shim=muvs::get_value
    //% group="Functions"
    export function get_value(id:SENSORS,type:_VISION_TYPE,item:Params):number{
        return 0
    }
    //% block="Get%id|🌈 Color Recognize|%item" color="#2E8B57"
    //% shim=muvs::get_color_value
    //% group="Functions"
    export function get_color_value(id:SENSORS,item:ColorParams):number{
        return 0
    }
    //% block="Get%id|🔳 Shape Card =%type" color="#2E8B57"
    //% shim=muvs::get_shape_card_type
    //% group="Functions"
    export function get_shape_card_type(id:SENSORS,type:SHAPE_CARD_TYPE):boolean{
        return true
    }
    //% block="Get%id|🔳 Traffic Card =%type" color="#2E8B57"
    //% shim=muvs::get_traffic_card_type
    //% group="Functions"
    export function get_traffic_card_type(id:SENSORS,type:TRAFFIC_CARD_TYPE):boolean{
        return true
    }
    //% block="Get%id|🔳 Number Card =%type" color="#2E8B57"
    //% shim=muvs::get_number_card_type
    //% group="Functions"
    export function get_number_card_type(id:SENSORS,type:NUM_CARD_TYPE):boolean{
        return true
    }
    //% block="Get%id|Algorithm 🌈 Color Recognize color =%color" color="#2E8B57"
    //% shim=muvs::get_color_recognize
    //% group="Functions"
    export function get_color_recognize(id:SENSORS,color:COLOR_TYPE):boolean{
        return true
    }
}
