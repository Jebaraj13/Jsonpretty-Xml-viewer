import React from "react";
import XMLViewer from "react-xml-viewer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import CardHeader from "@material-ui/core/CardHeader";

const xml =
  '<?xml version="1.0"?><colors><color name="red"><r>255</r><g>0</g><b>0</b></color><color name="green"><r>0</r><g>255</g><b>0</b></color><color name="blue"><r>0</r><g>0</g><b>255</b></color></colors>';

const helloworld =
  "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Do not forget me this weekend!</body></note>";

const Xmldata = `<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE article SYSTEM "http://www.oasis-open.org/docbook/xml/4.1.2/docbookx.dtd" PUBLIC "-//OASIS//DTD DocBook XML V4.1.2//EN">
<article lang="">
<para>Dropdown button </para>
<orderedlist>
<listitem>
<para>
<link linkend="">Action</link>
</para>
</listitem>
<listitem>
<para>
<link linkend="">Another action</link>
</para>
</listitem>
<listitem>
<para>
<link linkend="">Something else here</link>
</para>
</listitem>
<listitem>
<para/>
</listitem>
<listitem>
<para>
<link linkend="">Separated link</link>
</para>
</listitem>
</orderedlist>
</article>`;

const customTheme = {
  attributeKeyColor: "#0074D9",
  attributeValueColor: "#2ECC40",
};
function Xmlviewer() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={12} sx={{ padding: 4 }}>
          <Grid item xs={6}>
            <Card elevation={5} sx={{ padding: 1 }}>
              <CardHeader title="Demo xml" />
              <XMLViewer xml={xml} theme={customTheme} />
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card elevation={5} sx={{ padding: 1 }}>
              <CardHeader title="Sample XML" />
              <XMLViewer xml={helloworld} theme={customTheme} />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} columns={12} sx={{ padding: 4 }}>
          <Grid item md={12}>
            <Card elevation={5} sx={{ padding: 1 }}>
              <CardHeader title="Dropdown XML" />
              <XMLViewer xml={Xmldata} theme={customTheme} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Xmlviewer;
