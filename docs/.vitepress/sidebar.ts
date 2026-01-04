export default function sidebar() {
  return [
    {
      text: 'الأساسيات',
      collapsible: true,
      items: [
        { text: 'مقدمة', link: '/basics/introduction' },
        { text: 'أساسيات المحاسبة', link: '/basics/accounting-basics' },
        { text: 'الواجهة', link: '/basics/interface' },
      ],
    },
    {
      text: 'الإعداد',
      collapsible: true,
      items: [
        { text: 'البدء', link: '/setting-up/getting-started' },
        { text: 'القيود الأولية', link: '/setting-up/initial-entries' },
        { text: 'الأرصدة الافتتاحية', link: '/setting-up/opening-balances' },
      ],
    },
    {
      text: 'المعاملات',
      collapsible: true,
      items: [
        {
          text: 'القيود المعاملاتية',
          link: '/transactions/transactional-entries',
        },
        { text: 'فواتير المبيعات', link: '/transactions/sales-invoices' },
        { text: 'فواتير المشتريات', link: '/transactions/purchase-invoices' },
        {
          text: 'محاسبة الخصم',
          link: '/transactions/discount-accounting',
        },
        {
          text: 'الفواتير متعددة العملات',
          link: '/transactions/multi-currency-invoicing',
        },
        { text: 'المدفوعات', link: '/transactions/payments' },
        { text: 'القيود اليومية', link: '/transactions/journal-entries' },
      ],
    },
    {
      text: 'القيود',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'القيود', link: '/entries/entries' },
        { text: 'العناصر', link: '/entries/items' },
        { text: 'الطرف', link: '/entries/party' },
        { text: 'الضرائب', link: '/entries/taxes' },
        { text: 'قائمة الأسعار', link: '/entries/price-list' },
      ],
    },
    {
      text: 'المخزون',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'مقدمة', link: '/inventory/introduction' },
        { text: 'حركة المخزون', link: '/inventory/stock-movement' },
        { text: 'الشحن', link: '/inventory/shipment' },
        { text: 'إيصال الشراء', link: '/inventory/purchase-receipt' },
        { text: 'دفتر الأستاذ للمخزون', link: '/inventory/stock-ledger' },
        { text: 'رصيد المخزون', link: '/inventory/stock-balance' },
        { text: 'الدفعات', link: '/inventory/batches' },
        { text: 'الرقم التسلسلي', link: '/inventory/serial-number' },
        { text: 'الإعدادات', link: '/inventory/settings' },
      ],
    },
    {
      text: 'التحليلات',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'لوحة التحكم', link: '/analytics/dashboard' },
        { text: 'التقارير', link: '/analytics/reports' },
        { text: 'دفتر الأستاذ العام', link: '/analytics/general-ledger' },
        { text: 'قائمة الدخل والخسارة', link: '/analytics/profit-and-loss' },
        { text: 'قائمة المركز المالي', link: '/analytics/balance-sheet' },
        { text: 'ميزان المراجعة', link: '/analytics/trial-balance' },
      ],
    },
    {
      text: 'متفرقات',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'البحث السريع', link: '/miscellaneous/search' },
        { text: 'سلسلة الأرقام', link: '/miscellaneous/number-series' },
        { text: 'معالج الاستيراد', link: '/miscellaneous/import-wizard' },
        { text: 'قوالب الطباعة', link: '/miscellaneous/print-templates' },
        { text: 'دليل الحسابات', link: '/miscellaneous/chart-of-accounts' },
        { text: 'تخصيص النموذج', link: '/miscellaneous/customize-form' },
        { text: 'الإعدادات', link: '/miscellaneous/settings' },
      ],
    },
  ];
}
