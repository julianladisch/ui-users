const countries = [
  { country: 'ui-users.data.countries.AFG', alpha2: 'AF', alpha3: 'AFG', numeric: '004' },
  { country: 'ui-users.data.countries.ALA', alpha2: 'AX', alpha3: 'ALA', numeric: '248' },
  { country: 'ui-users.data.countries.ALB', alpha2: 'AL', alpha3: 'ALB', numeric: '008' },
  { country: 'ui-users.data.countries.DZA', alpha2: 'DZ', alpha3: 'DZA', numeric: '012' },
  { country: 'ui-users.data.countries.ASM', alpha2: 'AS', alpha3: 'ASM', numeric: '016' },
  { country: 'ui-users.data.countries.AND', alpha2: 'AD', alpha3: 'AND', numeric: '020' },
  { country: 'ui-users.data.countries.AGO', alpha2: 'AO', alpha3: 'AGO', numeric: '024' },
  { country: 'ui-users.data.countries.AIA', alpha2: 'AI', alpha3: 'AIA', numeric: '660' },
  { country: 'ui-users.data.countries.ATA', alpha2: 'AQ', alpha3: 'ATA', numeric: '010' },
  { country: 'ui-users.data.countries.ATG', alpha2: 'AG', alpha3: 'ATG', numeric: '028' },
  { country: 'ui-users.data.countries.ARG', alpha2: 'AR', alpha3: 'ARG', numeric: '032' },
  { country: 'ui-users.data.countries.ARM', alpha2: 'AM', alpha3: 'ARM', numeric: '051' },
  { country: 'ui-users.data.countries.ABW', alpha2: 'AW', alpha3: 'ABW', numeric: '533' },
  { country: 'ui-users.data.countries.AUS', alpha2: 'AU', alpha3: 'AUS', numeric: '036' },
  { country: 'ui-users.data.countries.AUT', alpha2: 'AT', alpha3: 'AUT', numeric: '040' },
  { country: 'ui-users.data.countries.AZE', alpha2: 'AZ', alpha3: 'AZE', numeric: '031' },
  { country: 'ui-users.data.countries.BHS', alpha2: 'BS', alpha3: 'BHS', numeric: '044' },
  { country: 'ui-users.data.countries.BHR', alpha2: 'BH', alpha3: 'BHR', numeric: '048' },
  { country: 'ui-users.data.countries.BGD', alpha2: 'BD', alpha3: 'BGD', numeric: '050' },
  { country: 'ui-users.data.countries.BRB', alpha2: 'BB', alpha3: 'BRB', numeric: '052' },
  { country: 'ui-users.data.countries.BLR', alpha2: 'BY', alpha3: 'BLR', numeric: '112' },
  { country: 'ui-users.data.countries.BEL', alpha2: 'BE', alpha3: 'BEL', numeric: '056' },
  { country: 'ui-users.data.countries.BLZ', alpha2: 'BZ', alpha3: 'BLZ', numeric: '084' },
  { country: 'ui-users.data.countries.BEN', alpha2: 'BJ', alpha3: 'BEN', numeric: '204' },
  { country: 'ui-users.data.countries.BMU', alpha2: 'BM', alpha3: 'BMU', numeric: '060' },
  { country: 'ui-users.data.countries.BTN', alpha2: 'BT', alpha3: 'BTN', numeric: '064' },
  { country: 'ui-users.data.countries.BOL', alpha2: 'BO', alpha3: 'BOL', numeric: '068' },
  { country: 'ui-users.data.countries.BIH', alpha2: 'BA', alpha3: 'BIH', numeric: '070' },
  { country: 'ui-users.data.countries.BWA', alpha2: 'BW', alpha3: 'BWA', numeric: '072' },
  { country: 'ui-users.data.countries.BVT', alpha2: 'BV', alpha3: 'BVT', numeric: '074' },
  { country: 'ui-users.data.countries.BRA', alpha2: 'BR', alpha3: 'BRA', numeric: '076' },
  { country: 'ui-users.data.countries.VGB', alpha2: 'VG', alpha3: 'VGB', numeric: '092' },
  { country: 'ui-users.data.countries.IOT', alpha2: 'IO', alpha3: 'IOT', numeric: '086' },
  { country: 'ui-users.data.countries.BRN', alpha2: 'BN', alpha3: 'BRN', numeric: '096' },
  { country: 'ui-users.data.countries.BGR', alpha2: 'BG', alpha3: 'BGR', numeric: '100' },
  { country: 'ui-users.data.countries.BFA', alpha2: 'BF', alpha3: 'BFA', numeric: '854' },
  { country: 'ui-users.data.countries.BDI', alpha2: 'BI', alpha3: 'BDI', numeric: '108' },
  { country: 'ui-users.data.countries.KHM', alpha2: 'KH', alpha3: 'KHM', numeric: '116' },
  { country: 'ui-users.data.countries.CMR', alpha2: 'CM', alpha3: 'CMR', numeric: '120' },
  { country: 'ui-users.data.countries.CAN', alpha2: 'CA', alpha3: 'CAN', numeric: '124' },
  { country: 'ui-users.data.countries.CPV', alpha2: 'CV', alpha3: 'CPV', numeric: '132' },
  { country: 'ui-users.data.countries.CYM', alpha2: 'KY', alpha3: 'CYM', numeric: '136' },
  { country: 'ui-users.data.countries.CAF', alpha2: 'CF', alpha3: 'CAF', numeric: '140' },
  { country: 'ui-users.data.countries.TCD', alpha2: 'TD', alpha3: 'TCD', numeric: '148' },
  { country: 'ui-users.data.countries.CHL', alpha2: 'CL', alpha3: 'CHL', numeric: '152' },
  { country: 'ui-users.data.countries.CHN', alpha2: 'CN', alpha3: 'CHN', numeric: '156' },
  { country: 'ui-users.data.countries.HKG', alpha2: 'HK', alpha3: 'HKG', numeric: '344' },
  { country: 'ui-users.data.countries.MAC', alpha2: 'MO', alpha3: 'MAC', numeric: '446' },
  { country: 'ui-users.data.countries.CXR', alpha2: 'CX', alpha3: 'CXR', numeric: '162' },
  { country: 'ui-users.data.countries.CCK', alpha2: 'CC', alpha3: 'CCK', numeric: '166' },
  { country: 'ui-users.data.countries.COL', alpha2: 'CO', alpha3: 'COL', numeric: '170' },
  { country: 'ui-users.data.countries.COM', alpha2: 'KM', alpha3: 'COM', numeric: '174' },
  { country: 'ui-users.data.countries.COG', alpha2: 'CG', alpha3: 'COG', numeric: '178' },
  { country: 'ui-users.data.countries.COD', alpha2: 'CD', alpha3: 'COD', numeric: '180' },
  { country: 'ui-users.data.countries.COK', alpha2: 'CK', alpha3: 'COK', numeric: '184' },
  { country: 'ui-users.data.countries.CRI', alpha2: 'CR', alpha3: 'CRI', numeric: '188' },
  { country: 'ui-users.data.countries.CIV', alpha2: 'CI', alpha3: 'CIV', numeric: '384' },
  { country: 'ui-users.data.countries.HRV', alpha2: 'HR', alpha3: 'HRV', numeric: '191' },
  { country: 'ui-users.data.countries.CUB', alpha2: 'CU', alpha3: 'CUB', numeric: '192' },
  { country: 'ui-users.data.countries.CYP', alpha2: 'CY', alpha3: 'CYP', numeric: '196' },
  { country: 'ui-users.data.countries.CZE', alpha2: 'CZ', alpha3: 'CZE', numeric: '203' },
  { country: 'ui-users.data.countries.DNK', alpha2: 'DK', alpha3: 'DNK', numeric: '208' },
  { country: 'ui-users.data.countries.DJI', alpha2: 'DJ', alpha3: 'DJI', numeric: '262' },
  { country: 'ui-users.data.countries.DMA', alpha2: 'DM', alpha3: 'DMA', numeric: '212' },
  { country: 'ui-users.data.countries.DOM', alpha2: 'DO', alpha3: 'DOM', numeric: '214' },
  { country: 'ui-users.data.countries.ECU', alpha2: 'EC', alpha3: 'ECU', numeric: '218' },
  { country: 'ui-users.data.countries.EGY', alpha2: 'EG', alpha3: 'EGY', numeric: '818' },
  { country: 'ui-users.data.countries.SLV', alpha2: 'SV', alpha3: 'SLV', numeric: '222' },
  { country: 'ui-users.data.countries.GNQ', alpha2: 'GQ', alpha3: 'GNQ', numeric: '226' },
  { country: 'ui-users.data.countries.ERI', alpha2: 'ER', alpha3: 'ERI', numeric: '232' },
  { country: 'ui-users.data.countries.EST', alpha2: 'EE', alpha3: 'EST', numeric: '233' },
  { country: 'ui-users.data.countries.ETH', alpha2: 'ET', alpha3: 'ETH', numeric: '231' },
  { country: 'ui-users.data.countries.FLK', alpha2: 'FK', alpha3: 'FLK', numeric: '238' },
  { country: 'ui-users.data.countries.FRO', alpha2: 'FO', alpha3: 'FRO', numeric: '234' },
  { country: 'ui-users.data.countries.FJI', alpha2: 'FJ', alpha3: 'FJI', numeric: '242' },
  { country: 'ui-users.data.countries.FIN', alpha2: 'FI', alpha3: 'FIN', numeric: '246' },
  { country: 'ui-users.data.countries.FRA', alpha2: 'FR', alpha3: 'FRA', numeric: '250' },
  { country: 'ui-users.data.countries.GUF', alpha2: 'GF', alpha3: 'GUF', numeric: '254' },
  { country: 'ui-users.data.countries.PYF', alpha2: 'PF', alpha3: 'PYF', numeric: '258' },
  { country: 'ui-users.data.countries.ATF', alpha2: 'TF', alpha3: 'ATF', numeric: '260' },
  { country: 'ui-users.data.countries.GAB', alpha2: 'GA', alpha3: 'GAB', numeric: '266' },
  { country: 'ui-users.data.countries.GMB', alpha2: 'GM', alpha3: 'GMB', numeric: '270' },
  { country: 'ui-users.data.countries.GEO', alpha2: 'GE', alpha3: 'GEO', numeric: '268' },
  { country: 'ui-users.data.countries.DEU', alpha2: 'DE', alpha3: 'DEU', numeric: '276' },
  { country: 'ui-users.data.countries.GHA', alpha2: 'GH', alpha3: 'GHA', numeric: '288' },
  { country: 'ui-users.data.countries.GIB', alpha2: 'GI', alpha3: 'GIB', numeric: '292' },
  { country: 'ui-users.data.countries.GRC', alpha2: 'GR', alpha3: 'GRC', numeric: '300' },
  { country: 'ui-users.data.countries.GRL', alpha2: 'GL', alpha3: 'GRL', numeric: '304' },
  { country: 'ui-users.data.countries.GRD', alpha2: 'GD', alpha3: 'GRD', numeric: '308' },
  { country: 'ui-users.data.countries.GLP', alpha2: 'GP', alpha3: 'GLP', numeric: '312' },
  { country: 'ui-users.data.countries.GUM', alpha2: 'GU', alpha3: 'GUM', numeric: '316' },
  { country: 'ui-users.data.countries.GTM', alpha2: 'GT', alpha3: 'GTM', numeric: '320' },
  { country: 'ui-users.data.countries.GGY', alpha2: 'GG', alpha3: 'GGY', numeric: '831' },
  { country: 'ui-users.data.countries.GIN', alpha2: 'GN', alpha3: 'GIN', numeric: '324' },
  { country: 'ui-users.data.countries.GNB', alpha2: 'GW', alpha3: 'GNB', numeric: '624' },
  { country: 'ui-users.data.countries.GUY', alpha2: 'GY', alpha3: 'GUY', numeric: '328' },
  { country: 'ui-users.data.countries.HTI', alpha2: 'HT', alpha3: 'HTI', numeric: '332' },
  { country: 'ui-users.data.countries.HMD', alpha2: 'HM', alpha3: 'HMD', numeric: '334' },
  { country: 'ui-users.data.countries.VAT', alpha2: 'VA', alpha3: 'VAT', numeric: '336' },
  { country: 'ui-users.data.countries.HND', alpha2: 'HN', alpha3: 'HND', numeric: '340' },
  { country: 'ui-users.data.countries.HUN', alpha2: 'HU', alpha3: 'HUN', numeric: '348' },
  { country: 'ui-users.data.countries.ISL', alpha2: 'IS', alpha3: 'ISL', numeric: '352' },
  { country: 'ui-users.data.countries.IND', alpha2: 'IN', alpha3: 'IND', numeric: '356' },
  { country: 'ui-users.data.countries.IDN', alpha2: 'ID', alpha3: 'IDN', numeric: '360' },
  { country: 'ui-users.data.countries.IRN', alpha2: 'IR', alpha3: 'IRN', numeric: '364' },
  { country: 'ui-users.data.countries.IRQ', alpha2: 'IQ', alpha3: 'IRQ', numeric: '368' },
  { country: 'ui-users.data.countries.IRL', alpha2: 'IE', alpha3: 'IRL', numeric: '372' },
  { country: 'ui-users.data.countries.IMN', alpha2: 'IM', alpha3: 'IMN', numeric: '833' },
  { country: 'ui-users.data.countries.ISR', alpha2: 'IL', alpha3: 'ISR', numeric: '376' },
  { country: 'ui-users.data.countries.ITA', alpha2: 'IT', alpha3: 'ITA', numeric: '380' },
  { country: 'ui-users.data.countries.JAM', alpha2: 'JM', alpha3: 'JAM', numeric: '388' },
  { country: 'ui-users.data.countries.JPN', alpha2: 'JP', alpha3: 'JPN', numeric: '392' },
  { country: 'ui-users.data.countries.JEY', alpha2: 'JE', alpha3: 'JEY', numeric: '832' },
  { country: 'ui-users.data.countries.JOR', alpha2: 'JO', alpha3: 'JOR', numeric: '400' },
  { country: 'ui-users.data.countries.KAZ', alpha2: 'KZ', alpha3: 'KAZ', numeric: '398' },
  { country: 'ui-users.data.countries.KEN', alpha2: 'KE', alpha3: 'KEN', numeric: '404' },
  { country: 'ui-users.data.countries.KIR', alpha2: 'KI', alpha3: 'KIR', numeric: '296' },
  { country: 'ui-users.data.countries.PRK', alpha2: 'KP', alpha3: 'PRK', numeric: '408' },
  { country: 'ui-users.data.countries.KOR', alpha2: 'KR', alpha3: 'KOR', numeric: '410' },
  { country: 'ui-users.data.countries.KWT', alpha2: 'KW', alpha3: 'KWT', numeric: '414' },
  { country: 'ui-users.data.countries.KGZ', alpha2: 'KG', alpha3: 'KGZ', numeric: '417' },
  { country: 'ui-users.data.countries.LAO', alpha2: 'LA', alpha3: 'LAO', numeric: '418' },
  { country: 'ui-users.data.countries.LVA', alpha2: 'LV', alpha3: 'LVA', numeric: '428' },
  { country: 'ui-users.data.countries.LBN', alpha2: 'LB', alpha3: 'LBN', numeric: '422' },
  { country: 'ui-users.data.countries.LSO', alpha2: 'LS', alpha3: 'LSO', numeric: '426' },
  { country: 'ui-users.data.countries.LBR', alpha2: 'LR', alpha3: 'LBR', numeric: '430' },
  { country: 'ui-users.data.countries.LBY', alpha2: 'LY', alpha3: 'LBY', numeric: '434' },
  { country: 'ui-users.data.countries.LIE', alpha2: 'LI', alpha3: 'LIE', numeric: '438' },
  { country: 'ui-users.data.countries.LTU', alpha2: 'LT', alpha3: 'LTU', numeric: '440' },
  { country: 'ui-users.data.countries.LUX', alpha2: 'LU', alpha3: 'LUX', numeric: '442' },
  { country: 'ui-users.data.countries.MKD', alpha2: 'MK', alpha3: 'MKD', numeric: '807' },
  { country: 'ui-users.data.countries.MDG', alpha2: 'MG', alpha3: 'MDG', numeric: '450' },
  { country: 'ui-users.data.countries.MWI', alpha2: 'MW', alpha3: 'MWI', numeric: '454' },
  { country: 'ui-users.data.countries.MYS', alpha2: 'MY', alpha3: 'MYS', numeric: '458' },
  { country: 'ui-users.data.countries.MDV', alpha2: 'MV', alpha3: 'MDV', numeric: '462' },
  { country: 'ui-users.data.countries.MLI', alpha2: 'ML', alpha3: 'MLI', numeric: '466' },
  { country: 'ui-users.data.countries.MLT', alpha2: 'MT', alpha3: 'MLT', numeric: '470' },
  { country: 'ui-users.data.countries.MHL', alpha2: 'MH', alpha3: 'MHL', numeric: '584' },
  { country: 'ui-users.data.countries.MTQ', alpha2: 'MQ', alpha3: 'MTQ', numeric: '474' },
  { country: 'ui-users.data.countries.MRT', alpha2: 'MR', alpha3: 'MRT', numeric: '478' },
  { country: 'ui-users.data.countries.MUS', alpha2: 'MU', alpha3: 'MUS', numeric: '480' },
  { country: 'ui-users.data.countries.MYT', alpha2: 'YT', alpha3: 'MYT', numeric: '175' },
  { country: 'ui-users.data.countries.MEX', alpha2: 'MX', alpha3: 'MEX', numeric: '484' },
  { country: 'ui-users.data.countries.FSM', alpha2: 'FM', alpha3: 'FSM', numeric: '583' },
  { country: 'ui-users.data.countries.MDA', alpha2: 'MD', alpha3: 'MDA', numeric: '498' },
  { country: 'ui-users.data.countries.MCO', alpha2: 'MC', alpha3: 'MCO', numeric: '492' },
  { country: 'ui-users.data.countries.MNG', alpha2: 'MN', alpha3: 'MNG', numeric: '496' },
  { country: 'ui-users.data.countries.MNE', alpha2: 'ME', alpha3: 'MNE', numeric: '499' },
  { country: 'ui-users.data.countries.MSR', alpha2: 'MS', alpha3: 'MSR', numeric: '500' },
  { country: 'ui-users.data.countries.MAR', alpha2: 'MA', alpha3: 'MAR', numeric: '504' },
  { country: 'ui-users.data.countries.MOZ', alpha2: 'MZ', alpha3: 'MOZ', numeric: '508' },
  { country: 'ui-users.data.countries.MMR', alpha2: 'MM', alpha3: 'MMR', numeric: '104' },
  { country: 'ui-users.data.countries.NAM', alpha2: 'NA', alpha3: 'NAM', numeric: '516' },
  { country: 'ui-users.data.countries.NRU', alpha2: 'NR', alpha3: 'NRU', numeric: '520' },
  { country: 'ui-users.data.countries.NPL', alpha2: 'NP', alpha3: 'NPL', numeric: '524' },
  { country: 'ui-users.data.countries.NLD', alpha2: 'NL', alpha3: 'NLD', numeric: '528' },
  { country: 'ui-users.data.countries.ANT', alpha2: 'AN', alpha3: 'ANT', numeric: '530' },
  { country: 'ui-users.data.countries.NCL', alpha2: 'NC', alpha3: 'NCL', numeric: '540' },
  { country: 'ui-users.data.countries.NZL', alpha2: 'NZ', alpha3: 'NZL', numeric: '554' },
  { country: 'ui-users.data.countries.NIC', alpha2: 'NI', alpha3: 'NIC', numeric: '558' },
  { country: 'ui-users.data.countries.NER', alpha2: 'NE', alpha3: 'NER', numeric: '562' },
  { country: 'ui-users.data.countries.NGA', alpha2: 'NG', alpha3: 'NGA', numeric: '566' },
  { country: 'ui-users.data.countries.NIU', alpha2: 'NU', alpha3: 'NIU', numeric: '570' },
  { country: 'ui-users.data.countries.NFK', alpha2: 'NF', alpha3: 'NFK', numeric: '574' },
  { country: 'ui-users.data.countries.MNP', alpha2: 'MP', alpha3: 'MNP', numeric: '580' },
  { country: 'ui-users.data.countries.NOR', alpha2: 'NO', alpha3: 'NOR', numeric: '578' },
  { country: 'ui-users.data.countries.OMN', alpha2: 'OM', alpha3: 'OMN', numeric: '512' },
  { country: 'ui-users.data.countries.PAK', alpha2: 'PK', alpha3: 'PAK', numeric: '586' },
  { country: 'ui-users.data.countries.PLW', alpha2: 'PW', alpha3: 'PLW', numeric: '585' },
  { country: 'ui-users.data.countries.PSE', alpha2: 'PS', alpha3: 'PSE', numeric: '275' },
  { country: 'ui-users.data.countries.PAN', alpha2: 'PA', alpha3: 'PAN', numeric: '591' },
  { country: 'ui-users.data.countries.PNG', alpha2: 'PG', alpha3: 'PNG', numeric: '598' },
  { country: 'ui-users.data.countries.PRY', alpha2: 'PY', alpha3: 'PRY', numeric: '600' },
  { country: 'ui-users.data.countries.PER', alpha2: 'PE', alpha3: 'PER', numeric: '604' },
  { country: 'ui-users.data.countries.PHL', alpha2: 'PH', alpha3: 'PHL', numeric: '608' },
  { country: 'ui-users.data.countries.PCN', alpha2: 'PN', alpha3: 'PCN', numeric: '612' },
  { country: 'ui-users.data.countries.POL', alpha2: 'PL', alpha3: 'POL', numeric: '616' },
  { country: 'ui-users.data.countries.PRT', alpha2: 'PT', alpha3: 'PRT', numeric: '620' },
  { country: 'ui-users.data.countries.PRI', alpha2: 'PR', alpha3: 'PRI', numeric: '630' },
  { country: 'ui-users.data.countries.QAT', alpha2: 'QA', alpha3: 'QAT', numeric: '634' },
  { country: 'ui-users.data.countries.REU', alpha2: 'RE', alpha3: 'REU', numeric: '638' },
  { country: 'ui-users.data.countries.ROU', alpha2: 'RO', alpha3: 'ROU', numeric: '642' },
  { country: 'ui-users.data.countries.RUS', alpha2: 'RU', alpha3: 'RUS', numeric: '643' },
  { country: 'ui-users.data.countries.RWA', alpha2: 'RW', alpha3: 'RWA', numeric: '646' },
  { country: 'ui-users.data.countries.BLM', alpha2: 'BL', alpha3: 'BLM', numeric: '652' },
  { country: 'ui-users.data.countries.SHN', alpha2: 'SH', alpha3: 'SHN', numeric: '654' },
  { country: 'ui-users.data.countries.KNA', alpha2: 'KN', alpha3: 'KNA', numeric: '659' },
  { country: 'ui-users.data.countries.LCA', alpha2: 'LC', alpha3: 'LCA', numeric: '662' },
  { country: 'ui-users.data.countries.MAF', alpha2: 'MF', alpha3: 'MAF', numeric: '663' },
  { country: 'ui-users.data.countries.SPM', alpha2: 'PM', alpha3: 'SPM', numeric: '666' },
  { country: 'ui-users.data.countries.VCT', alpha2: 'VC', alpha3: 'VCT', numeric: '670' },
  { country: 'ui-users.data.countries.WSM', alpha2: 'WS', alpha3: 'WSM', numeric: '882' },
  { country: 'ui-users.data.countries.SMR', alpha2: 'SM', alpha3: 'SMR', numeric: '674' },
  { country: 'ui-users.data.countries.STP', alpha2: 'ST', alpha3: 'STP', numeric: '678' },
  { country: 'ui-users.data.countries.SAU', alpha2: 'SA', alpha3: 'SAU', numeric: '682' },
  { country: 'ui-users.data.countries.SEN', alpha2: 'SN', alpha3: 'SEN', numeric: '686' },
  { country: 'ui-users.data.countries.SRB', alpha2: 'RS', alpha3: 'SRB', numeric: '688' },
  { country: 'ui-users.data.countries.SYC', alpha2: 'SC', alpha3: 'SYC', numeric: '690' },
  { country: 'ui-users.data.countries.SLE', alpha2: 'SL', alpha3: 'SLE', numeric: '694' },
  { country: 'ui-users.data.countries.SGP', alpha2: 'SG', alpha3: 'SGP', numeric: '702' },
  { country: 'ui-users.data.countries.SVK', alpha2: 'SK', alpha3: 'SVK', numeric: '703' },
  { country: 'ui-users.data.countries.SVN', alpha2: 'SI', alpha3: 'SVN', numeric: '705' },
  { country: 'ui-users.data.countries.SLB', alpha2: 'SB', alpha3: 'SLB', numeric: '090' },
  { country: 'ui-users.data.countries.SOM', alpha2: 'SO', alpha3: 'SOM', numeric: '706' },
  { country: 'ui-users.data.countries.ZAF', alpha2: 'ZA', alpha3: 'ZAF', numeric: '710' },
  { country: 'ui-users.data.countries.SGS', alpha2: 'GS', alpha3: 'SGS', numeric: '239' },
  { country: 'ui-users.data.countries.SSD', alpha2: 'SS', alpha3: 'SSD', numeric: '728' },
  { country: 'ui-users.data.countries.ESP', alpha2: 'ES', alpha3: 'ESP', numeric: '724' },
  { country: 'ui-users.data.countries.LKA', alpha2: 'LK', alpha3: 'LKA', numeric: '144' },
  { country: 'ui-users.data.countries.SDN', alpha2: 'SD', alpha3: 'SDN', numeric: '736' },
  { country: 'ui-users.data.countries.SUR', alpha2: 'SR', alpha3: 'SUR', numeric: '740' },
  { country: 'ui-users.data.countries.SJM', alpha2: 'SJ', alpha3: 'SJM', numeric: '744' },
  { country: 'ui-users.data.countries.SWZ', alpha2: 'SZ', alpha3: 'SWZ', numeric: '748' },
  { country: 'ui-users.data.countries.SWE', alpha2: 'SE', alpha3: 'SWE', numeric: '752' },
  { country: 'ui-users.data.countries.CHE', alpha2: 'CH', alpha3: 'CHE', numeric: '756' },
  { country: 'ui-users.data.countries.SYR', alpha2: 'SY', alpha3: 'SYR', numeric: '760' },
  { country: 'ui-users.data.countries.TWN', alpha2: 'TW', alpha3: 'TWN', numeric: '158' },
  { country: 'ui-users.data.countries.TJK', alpha2: 'TJ', alpha3: 'TJK', numeric: '762' },
  { country: 'ui-users.data.countries.TZA', alpha2: 'TZ', alpha3: 'TZA', numeric: '834' },
  { country: 'ui-users.data.countries.THA', alpha2: 'TH', alpha3: 'THA', numeric: '764' },
  { country: 'ui-users.data.countries.TLS', alpha2: 'TL', alpha3: 'TLS', numeric: '626' },
  { country: 'ui-users.data.countries.TGO', alpha2: 'TG', alpha3: 'TGO', numeric: '768' },
  { country: 'ui-users.data.countries.TKL', alpha2: 'TK', alpha3: 'TKL', numeric: '772' },
  { country: 'ui-users.data.countries.TON', alpha2: 'TO', alpha3: 'TON', numeric: '776' },
  { country: 'ui-users.data.countries.TTO', alpha2: 'TT', alpha3: 'TTO', numeric: '780' },
  { country: 'ui-users.data.countries.TUN', alpha2: 'TN', alpha3: 'TUN', numeric: '788' },
  { country: 'ui-users.data.countries.TUR', alpha2: 'TR', alpha3: 'TUR', numeric: '792' },
  { country: 'ui-users.data.countries.TKM', alpha2: 'TM', alpha3: 'TKM', numeric: '795' },
  { country: 'ui-users.data.countries.TCA', alpha2: 'TC', alpha3: 'TCA', numeric: '796' },
  { country: 'ui-users.data.countries.TUV', alpha2: 'TV', alpha3: 'TUV', numeric: '798' },
  { country: 'ui-users.data.countries.UGA', alpha2: 'UG', alpha3: 'UGA', numeric: '800' },
  { country: 'ui-users.data.countries.UKR', alpha2: 'UA', alpha3: 'UKR', numeric: '804' },
  { country: 'ui-users.data.countries.ARE', alpha2: 'AE', alpha3: 'ARE', numeric: '784' },
  { country: 'ui-users.data.countries.GBR', alpha2: 'GB', alpha3: 'GBR', numeric: '826' },
  { country: 'ui-users.data.countries.USA', alpha2: 'US', alpha3: 'USA', numeric: '840' },
  { country: 'ui-users.data.countries.UMI', alpha2: 'UM', alpha3: 'UMI', numeric: '581' },
  { country: 'ui-users.data.countries.URY', alpha2: 'UY', alpha3: 'URY', numeric: '858' },
  { country: 'ui-users.data.countries.UZB', alpha2: 'UZ', alpha3: 'UZB', numeric: '860' },
  { country: 'ui-users.data.countries.VUT', alpha2: 'VU', alpha3: 'VUT', numeric: '548' },
  { country: 'ui-users.data.countries.VEN', alpha2: 'VE', alpha3: 'VEN', numeric: '862' },
  { country: 'ui-users.data.countries.VNM', alpha2: 'VN', alpha3: 'VNM', numeric: '704' },
  { country: 'ui-users.data.countries.VIR', alpha2: 'VI', alpha3: 'VIR', numeric: '850' },
  { country: 'ui-users.data.countries.WLF', alpha2: 'WF', alpha3: 'WLF', numeric: '876' },
  { country: 'ui-users.data.countries.ESH', alpha2: 'EH', alpha3: 'ESH', numeric: '732' },
  { country: 'ui-users.data.countries.YEM', alpha2: 'YE', alpha3: 'YEM', numeric: '887' },
  { country: 'ui-users.data.countries.ZMB', alpha2: 'ZM', alpha3: 'ZMB', numeric: '894' },
  { country: 'ui-users.data.countries.ZWE', alpha2: 'ZW', alpha3: 'ZWE', numeric: '716' },
];

export const countriesByCode = countries.reduce((map, c) =>
  (Object.assign(map, { [c.alpha2]: c })), {});

export const countriesByName = countries.reduce((map, c) =>
  (Object.assign(map, { [c.country]: c })), {});

export const countriesOptions = countries.map(c => ({
  label: c.country,
  value: c.alpha2,
}));

export default countries;
