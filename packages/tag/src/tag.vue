<template>
	<div>
		<span v-if="disableTransitions" :class="classes" @click="handleClick">
			{{this.$slots.default[0].text}}}
			<!-- {this.closable === true? '<i class="sc-tag__close sc-icon-close" @click="handleClose">'</i> : ''} -->
		</span>
		<transition v-else name="sc-zoom-in-center">
			<span :class="classes" @click="handleClick">
					{{this.$slots.default[0].text}}
					<i class="sc-tag__close sc-icon-close" @click="handleClose" v-if="closeable"></i>
			</span>
		</transition>		
	</div>	
</template>
<script>
  export default {
    name: 'scTag',
    props: {
      text: String,
      closeable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    data(){
    	return{
    		classes:[ 'sc-tag', this.type ? `sc-tag--${this.type}` : '',
		        this.tagSize ? `sc-tag--${this.tagSize}` : '',
		        {'is-hit': this.hit}
		    ]
    	}
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
        console.log('点击关闭')
      },
      handleClick(event) {
        event.stopPropagation();
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      // const classes = [ 'sc-tag', this.type ? `sc-tag--${this.type}` : '',
      //   this.tagSize ? `sc-tag--${this.tagSize}` : '',
      //   {'is-hit': this.hit}
      // ];

      // const tagEl = (<span class={classes} style={{backgroundColor: this.color}} on-click={this.handleClick}>
      //   { this.$slots.default }
      //   {
      //     this.closable && <i class="sc-tag__close sc-icon-close" on-click={this.handleClose}></i>
      //   }
      // </span>);
   //    const tag1 = h('span',{
   //    		'class':classes,
			// style:{
			// 	backgroundColor:this.color
			// },
			// on:{
			// 	click:this.handleClick
			// },
			// domProps:{
			// 	innerHTML:123
			// }
   //    },[h('a')])
      // const tag2 = h('transition',{
      // 		attrs:{
      // 			name:'sc-zoom-in-center'
      // 		}
      // })

      // return this.disableTransitions ? tag2 : tag1;
    }
  };
</script>
