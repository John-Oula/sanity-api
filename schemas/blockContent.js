/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import React from 'react'

import { Container, Card, Grid, Heading, Stack, Box, Flex,Text, Label, Switch } from '@sanity/ui'


const teamRender = props => (
    <span style={{ backgroundColor: 'yellow' }}>Team box</span>
)

const backGround = (props) => {
console.log(props)
  return(<span style={{ backgroundColor: 'yellow' }}>{props.children}</span>)

}
const grid = props => (
    <Flex style={{ backgroundColor: 'yellow' }}>{props.children}</Flex>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of:[
        {
          name: "inlineVideo",
          type: "file",
          title: "Inline Video Player",
          options:{
            accept:"video/*",
          },
        },
        {
          type: 'youtube'
        },
        {
          type:'googleDrive',
          icon: () => 'G',
      
        },
        {
          type: 'colorPicker',
          icon: () => 'Bc',
          render: backGround
        },

      ],


      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', name: 'bullet', value: 'bullet'},
      {title: 'Number', name: 'number', value: 'number'}
    ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property ??? e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { "title": "Strong", "value": "strong" },
          { "title": "Emphasis", "value": "em" },
          { "title": "Code", "value": "code" },
          { "title": "Underline", "value": "underline" },
          { "title": "Strike", "value": "strike-through" },
          
          // {title: 'Video', value: 'video', blockEditor: {
          //   icon: highlightIcon,
          //     render: videoField
          //   }},
          {title: 'Grid', value: 'grid', blockEditor: {
            icon: () => 'G',
              render: grid
            }},
        ],
        // Annotations can be any object structure ??? e.g. a link or a footnote.
        annotations: [
          {name: 'color', title: 'Color', type: 'color'},
          { 
            title: 'Section Header',
            name: 'sectionHeader',
            type: 'color',
            blockEditor: {
              icon: () => 'HD',
              
            },
          },
          {name: 'backgroundColor', title: 'Background Color', type: 'color'},
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Inline Url',
            name: 'inlineUrl',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },

        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options:{
        metadata: [
          'dimensions', // Always included
        ],
      },
      
        fields: [
          {
            name: 'alignImage',
            title: 'Image configuration',
            type: 'string',
            options: {
              layout: 'radio',
              list: ['left', 'full-width', 'right']
          }
  
          },
        ],
    
    },

    {
      name: 'favoriteColor',
      title: 'Favorite color',
      type: 'color'
    },
    {
      name: "forms",
      type: "object",
      title: "Forms",

          fields: [
            {
              name: 'forms',
              title: 'Which form would you like to reference?',
              type: 'reference',
              to: [{ type: 'forms' }]

            },
          ],
          preview: {
            select: {
              title: 'forms.title'
            }
          }



    },
    {
      name: "teams",
      type: "object",
      title: "Team",
      icon: () => 'T',
      render: teamRender,
          fields: [
            {
              name: 'teamMember',
              title: 'Add team members',
              type: 'array',
              of: [{ type: 'reference',to:[{type:'team'}] }]

            },
          ],




    },
    // {
    //   name: "grid",
    //   type: "object",
    //   title: "Grid",
    //   icon: () => 'G',
    //   render: teamRender,
    //   fields: [
    //     {
    //       name: 'teamMember',
    //       title: 'Add team members',
    //       type: 'array',
    //       of: [{ type: 'reference',to:[{type:'team'}] }]
    //
    //     },
    //   ],
    //
    //
    //
    //
    // }
  ],
}
