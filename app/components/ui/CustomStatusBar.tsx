import React, { FC } from 'react'
import { StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IStatusBar {
  backgroundColor: string,
  barStyle?: 'default' | 'light-content' | 'dark-content'
}

const CustomStatusBar: FC<IStatusBar> = ({ backgroundColor, barStyle = 'light-content' }) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle} />
    </View>
  )
}

export default CustomStatusBar