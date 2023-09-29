import { Feather } from '@expo/vector-icons'
import { TypeRootStackParamList } from '../navigation/types'

export interface IItem {
  iconName: keyof typeof Feather.glyphMap,
  title: keyof TypeRootStackParamList,
  reverse?: boolean
}

