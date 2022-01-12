// import * as React from 'react';
// import { TextField,Box } from '@material-ui/core';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useState } from 'react';

import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

export default class CountrySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county_name: []
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (event, values) => {
    this.setState({
      county_name: values
    }, () => {
      // This will output an array of objects
      // given by Autocompelte options property.
      console.log(this.state.county_name);
    });
  }

  render() {
    return (
      // <div style={{ width: 300 }}>
      <div>
        <Autocomplete
          options={countries}
          getOptionLabel={option => option.label}
          onChange={this.onTagsChange}
         
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Country Of Origin"
              margin="normal"
              size="small"
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}



// export default function CountrySelect(props) {
  
//   const [countrystate, setcountrystate] = useState("");

//   const countrySelectHandler= (event)=>{
//     const selectedCountryName = event.target.value;
//     setcountrystate({
//       selectedCountryName
//     });
//     console.log("----:"+selectedCountryName);
// }

//   return (
//     <Autocomplete
//       id="country-select-demo"
//       options={countries}
//       size = "small"
//       onChange={countrySelectHandler}
//       getOptionLabel={(option) => option.label}
//       renderOption={(props, option) => (
//         <Box component="li" {...props}>
//           {option.label} ({option.code}) 
//         </Box>
//       )}
//       renderInput={(params) => (
//         <TextField
//           variant="outlined"
//           size = "small"
//           {...params}
//           label="Country Of Origin"
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: 'new-password', // disable autocomplete and autofill
//           }}
//         />
//       )}
//     />
//   );
// }

// // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'AD', label: 'Andorra' },
  { code: 'AE', label: 'United Arab Emirates'},
  { code: 'AF', label: 'Afghanistan'},
  { code: 'AI', label: 'Anguilla'},
  { code: 'AL', label: 'Albania'},
  { code: 'AM', label: 'Armenia'},
  { code: 'AO', label: 'Angola'},
  { code: 'AQ', label: 'Antarctica'},
  { code: 'AR', label: 'Argentina' },
  { code: 'AS', label: 'American Samoa' },
  { code: 'AT', label: 'Austria'},
  { code: 'AU', label: 'Australia'},
  { code: 'AW', label: 'Aruba' },
  { code: 'AX', label: 'Alland Islands'},
  { code: 'AZ', label: 'Azerbaijan' },

  { code: 'BB', label: 'Barbados'},
  { code: 'BD', label: 'Bangladesh'},
  { code: 'BE', label: 'Belgium'},
  { code: 'BF', label: 'Burkina Faso'},
  { code: 'BG', label: 'Bulgaria'},
  { code: 'BH', label: 'Bahrain'  },
  { code: 'BI', label: 'Burundi'  },
  { code: 'BJ', label: 'Benin' },
  { code: 'BL', label: 'Saint Barthelemy'  },
  { code: 'BM', label: 'Bermuda' },
  { code: 'BN', label: 'Brunei Darussalam' },
  { code: 'BO', label: 'Bolivia' },
  { code: 'BR', label: 'Brazil' },
  { code: 'BS', label: 'Bahamas' },
  { code: 'BT', label: 'Bhutan'  },
  
  { code: 'BV', label: 'Bouvet Island' },
  { code: 'BW', label: 'Botswana' },
  { code: 'BY', label: 'Belarus' },
  { code: 'BZ', label: 'Belize'  },
  { code: 'CH', label: 'Switzerland' },
  { code: 'CI', label: "Cote d'Ivoire"  },
  { code: 'CK', label: 'Cook Islands'  },
  { code: 'CL', label: 'Chile' },
  { code: 'CM', label: 'Cameroon'  },
  { code: 'CN', label: 'China' },
  { code: 'CO', label: 'Colombia'},
  { code: 'CR', label: 'Costa Rica'  },
  { code: 'CU', label: 'Cuba' },
  { code: 'CV', label: 'Cape Verde'  },
  { code: 'CW', label: 'Curacao' },
  { code: 'CX', label: 'Christmas Island' },
  { code: 'CY', label: 'Cyprus'  },
  { code: 'CZ', label: 'Czech Republic'  },

  { code: 'DZ', label: 'Algeria'  },
  { code: 'EC', label: 'Ecuador'  },
  { code: 'EE', label: 'Estonia'  },
  { code: 'EG', label: 'Egypt' },
  { code: 'EH', label: 'Western Sahara'  },
  { code: 'ER', label: 'Eritrea' },
  { code: 'ES', label: 'Spain' },
  { code: 'ET', label: 'Ethiopia'  },
  { code: 'FI', label: 'Finland'  },
  { code: 'FJ', label: 'Fiji'  },
 
  { code: 'HN', label: 'Honduras'  },
  { code: 'HR', label: 'Croatia'  },
  { code: 'HT', label: 'Haiti' },
  { code: 'HU', label: 'Hungary' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'IE', label: 'Ireland' },
  { code: 'IL', label: 'Israel'  },
  { code: 'IM', label: 'Isle of Man'},
  { code: 'IN', label: 'India' },
 
  { code: 'KE', label: 'Kenya' },
  { code: 'KG', label: 'Kyrgyzstan'  },
  { code: 'KH', label: 'Cambodia' },
  { code: 'KI', label: 'Kiribati'  },
  { code: 'KM', label: 'Comoros'  },
 
  { code: 'LB', label: 'Lebanon' },
  { code: 'LC', label: 'Saint Lucia' },
  { code: 'LI', label: 'Liechtenstein'  },
  { code: 'LK', label: 'Sri Lanka'},
  { code: 'LR', label: 'Liberia'  },
  { code: 'LS', label: 'Lesotho'  },
  { code: 'LT', label: 'Lithuania' },
  { code: 'LU', label: 'Luxembourg'  },
  { code: 'LV', label: 'Latvia'  },
  { code: 'LY', label: 'Libya'  },
  { code: 'MA', label: 'Morocco'  },
  { code: 'MC', label: 'Monaco' },

  { code: 'MQ', label: 'Martinique' },
  { code: 'MR', label: 'Mauritania'  },
  { code: 'MS', label: 'Montserrat' },
  { code: 'MT', label: 'Malta'},
  { code: 'MU', label: 'Mauritius'  },
  { code: 'MV', label: 'Maldives'  },
  { code: 'MW', label: 'Malawi' },
  { code: 'MX', label: 'Mexico' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'MZ', label: 'Mozambique'  },
  { code: 'NA', label: 'Namibia'},
  { code: 'NC', label: 'New Caledonia'},
  { code: 'NE', label: 'Niger'},
  { code: 'NF', label: 'Norfolk Island' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'NI', label: 'Nicaragua' },
  { code: 'NL', label: 'Netherlands'},
  { code: 'NO', label: 'Norway'},
  { code: 'NP', label: 'Nepal' },
  { code: 'NR', label: 'Nauru' },
  { code: 'NU', label: 'Niue' },
  { code: 'NZ', label: 'New Zealand'},
  { code: 'OM', label: 'Oman' },
  { code: 'PA', label: 'Panama' },
  { code: 'PE', label: 'Peru'},
  { code: 'PF', label: 'French Polynesia' },
  { code: 'PG', label: 'Papua New Guinea' },
  { code: 'PH', label: 'Philippines'},
  { code: 'PK', label: 'Pakistan'},
  { code: 'PL', label: 'Poland'},
  { code: 'VN', label: 'Vietnam'},
  { code: 'VU', label: 'Vanuatu' },
  { code: 'WF', label: 'Wallis and Futuna' },
  { code: 'WS', label: 'Samoa' },
  { code: 'XK', label: 'Kosovo' },
  { code: 'YE', label: 'Yemen' },
  { code: 'YT', label: 'Mayotte' },
  { code: 'ZA', label: 'South Africa'},
  { code: 'ZM', label: 'Zambia' },
  { code: 'ZW', label: 'Zimbabwe' },
];