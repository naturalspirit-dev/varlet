import type { App } from 'vue'

export const install: (app: App) => void

export * from './actionSheet'
export * from './appBar'
export * from './backTop'
export * from './badge'
export * from './bottomNavigation'
export * from './bottomNavigationItem'
export * from './button'
export * from './card'
export * from './cell'
export * from './checkbox'
export * from './checkboxGroup'
export * from './chip'
export * from './col'
export * from './collapse'
export * from './collapseItem'
export * from './countdown'
export * from './counter'
export * from './datePicker'
export * from './dialog'
export * from './divider'
export * from './form'
export * from './formDetails'
export * from './icon'
export * from './image'
export * from './imagePreview'
export * from './indexAnchor'
export * from './indexBar'
export * from './input'
export * from './lazy'
export * from './list'
export * from './loading'
export * from './locale'
export * from './menu'
export * from './option'
export * from './pagination'
export * from './picker'
export * from './popup'
export * from './progress'
export * from './pullRefresh'
export * from './radio'
export * from './radioGroup'
export * from './rate'
export * from './ripple'
export * from './row'
export * from './select'
export * from './skeleton'
export * from './slider'
export * from './snackbar'
export * from './space'
export * from './step'
export * from './steps'
export * from './sticky'
export * from './styleProvider'
export * from './swipe'
export * from './swipeItem'
export * from './switch'
export * from './tab'
export * from './tabItem'
export * from './table'
export * from './tabs'
export * from './tabsItems'
export * from './themes'
export * from './timePicker'
export * from './uploader'
export * from './varComponent'
export * from './varDirective'

declare module 'vue' {
  export interface GlobalComponents {
    VarActionSheet: typeof import('@varlet/ui')['_ActionSheetComponent']
    VarAppBar: typeof import('@varlet/ui')['_AppBarComponent']
    VarBackTop: typeof import('@varlet/ui')['_BackTopComponent']
    VarBadge: typeof import('@varlet/ui')['_BadgeComponent']
    VarBottomNavigation: typeof import('@varlet/ui')['_BottomNavigationComponent']
    VarBottomNavigationItem: typeof import('@varlet/ui')['_BottomNavigationItemComponent']
    VarButton: typeof import('@varlet/ui')['_ButtonComponent']
    VarCard: typeof import('@varlet/ui')['_CardComponent']
    VarCell: typeof import('@varlet/ui')['_CellComponent']
    VarCheckbox: typeof import('@varlet/ui')['_CheckboxComponent']
    VarCheckboxGroup: typeof import('@varlet/ui')['_CheckboxGroupComponent']
    VarChip: typeof import('@varlet/ui')['_ChipComponent']
    VarCol: typeof import('@varlet/ui')['_ColComponent']
    VarCollapse: typeof import('@varlet/ui')['_CollapseComponent']
    VarCollapseItem: typeof import('@varlet/ui')['_CollapseItemComponent']
    VarCountdown: typeof import('@varlet/ui')['_CountdownComponent']
    VarCounter: typeof import('@varlet/ui')['_CounterComponent']
    VarDatePicker: typeof import('@varlet/ui')['_DatePickerComponent']
    VarDialog: typeof import('@varlet/ui')['_DialogComponent']
    VarDivider: typeof import('@varlet/ui')['_DividerComponent']
    VarForm: typeof import('@varlet/ui')['_FormComponent']
    VarFormDetails: typeof import('@varlet/ui')['_FormDetailsComponent']
    VarIcon: typeof import('@varlet/ui')['_IconComponent']
    VarImage: typeof import('@varlet/ui')['_ImageComponent']
    VarImagePreview: typeof import('@varlet/ui')['_ImagePreviewComponent']
    VarIndexAnchor: typeof import('@varlet/ui')['_IndexAnchorComponent']
    VarIndexBar: typeof import('@varlet/ui')['_IndexBarComponent']
    VarInput: typeof import('@varlet/ui')['_InputComponent']
    VarLazy: typeof import('@varlet/ui')['_LazyComponent']
    VarList: typeof import('@varlet/ui')['_ListComponent']
    VarLoading: typeof import('@varlet/ui')['_LoadingComponent']
    VarLocale: typeof import('@varlet/ui')['_LocaleComponent']
    VarMenu: typeof import('@varlet/ui')['_MenuComponent']
    VarOption: typeof import('@varlet/ui')['_OptionComponent']
    VarPagination: typeof import('@varlet/ui')['_PaginationComponent']
    VarPicker: typeof import('@varlet/ui')['_PickerComponent']
    VarPopup: typeof import('@varlet/ui')['_PopupComponent']
    VarProgress: typeof import('@varlet/ui')['_ProgressComponent']
    VarPullRefresh: typeof import('@varlet/ui')['_PullRefreshComponent']
    VarRadio: typeof import('@varlet/ui')['_RadioComponent']
    VarRadioGroup: typeof import('@varlet/ui')['_RadioGroupComponent']
    VarRate: typeof import('@varlet/ui')['_RateComponent']
    VarRipple: typeof import('@varlet/ui')['_RippleComponent']
    VarRow: typeof import('@varlet/ui')['_RowComponent']
    VarSelect: typeof import('@varlet/ui')['_SelectComponent']
    VarSkeleton: typeof import('@varlet/ui')['_SkeletonComponent']
    VarSlider: typeof import('@varlet/ui')['_SliderComponent']
    VarSnackbar: typeof import('@varlet/ui')['_SnackbarComponent']
    VarSpace: typeof import('@varlet/ui')['_SpaceComponent']
    VarStep: typeof import('@varlet/ui')['_StepComponent']
    VarSteps: typeof import('@varlet/ui')['_StepsComponent']
    VarSticky: typeof import('@varlet/ui')['_StickyComponent']
    VarStyleProvider: typeof import('@varlet/ui')['_StyleProviderComponent']
    VarSwipe: typeof import('@varlet/ui')['_SwipeComponent']
    VarSwipeItem: typeof import('@varlet/ui')['_SwipeItemComponent']
    VarSwitch: typeof import('@varlet/ui')['_SwitchComponent']
    VarTab: typeof import('@varlet/ui')['_TabComponent']
    VarTabItem: typeof import('@varlet/ui')['_TabItemComponent']
    VarTable: typeof import('@varlet/ui')['_TableComponent']
    VarTabs: typeof import('@varlet/ui')['_TabsComponent']
    VarTabsItems: typeof import('@varlet/ui')['_TabsItemsComponent']
    VarThemes: typeof import('@varlet/ui')['_ThemesComponent']
    VarTimePicker: typeof import('@varlet/ui')['_TimePickerComponent']
    VarUploader: typeof import('@varlet/ui')['_UploaderComponent']
  }
}
