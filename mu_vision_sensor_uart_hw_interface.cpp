/*
 * mu_vision_sensor_uart_hw_interface.cpp
 *
 *  Created on: 2018年8月8日
 *      Author: ysq
 */

#include "mu_vision_sensor_uart_hw_interface.h"

MuVisionSensorUart::MuVisionSensorUart(MuVsUart* uart,
                                       uint32_t address)
    : MuVsUartMethod(address),
      uart_(uart) {
}

MuVisionSensorUart::~MuVisionSensorUart() {}

//uint32_t MuVisionSensorUart::UartAvailable(void) {
//  return uart_->available();
//}

uint32_t MuVisionSensorUart::UartRead(uint8_t* temp, uint8_t length) {
  // uint8_t count=0;
  // uint8_t timeout=0;
  // uint8_t rec[length]={0};
  // uint8_t len=0;
  // while (count<length)
  // {
  //   len=uart_->read(rec,length-count,ASYNC);
  //   if(len>0){
  //     memcpy(&temp[count],rec,len);
  //     count+=len;
  //   }
  //   wait_ms(10);
  //   timeout++;
  //   if(timeout==10)
  //     break;
  // }
  // return count;
  return uart_->read(temp,length);
}

uint32_t MuVisionSensorUart::UartWrite(uint8_t* temp, uint8_t length) {
  return uart_->send(temp, length);
}

