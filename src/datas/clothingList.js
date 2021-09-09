import brassiere from '../assets/clothings/brassiere.jpg'
import chaussettes from '../assets/clothings/chaussettes.jpg'
import tshirt_lifestyle from '../assets/clothings/tshirt_lifestyle.jpg'
import veste_bleu from '../assets/clothings/veste_bleu.jpg'
import legging_motif from '../assets/clothings/legging_motif.jpg'
import legging_noir from '../assets/clothings/legging_noir.jpg'
import tshirt_running from '../assets/clothings/tshirt_running.jpg'
import veste_running from '../assets/clothings/veste_running.jpg'

export const clothingList = [
	{
		name: 'Brassière',
		category: 'Yoga',
		id: '1ed',
		cover: brassiere,
		price: 15,
		labels: ['b_corp', 'fair_trade']
	},
	{
		name: 'Chaussettes',
		category: 'Running',
		id: '2ab',
		cover: chaussettes,
		price: 16,
		labels: ['origine_france', 'fair_trade']
	},

	{
		name: 'T-shirt Lifestyle',
		category: 'Lifestyle',
		id: '3sd',
		cover: tshirt_lifestyle,
		price: 9,
		labels: ['b_corp', 'origine_france', 'fair_trade']
	},
	{
		name: 'Veste Bleu',
		category: 'Lifestyle',
		id: '4kk',
		cover: veste_bleu,
		price: 20,
		labels: ['b_corp', 'fair_trade']
	},
	{
		name: 'Legging Motif',
		category: 'Yoga',
		id: '5pl',
		cover: legging_motif,
		price: 25,
		labels: ['origine_france', 'fair_trade']
	},

	{
		name: 'Legging Noir',
		category: 'Yoga',
		id: '8fp',
		cover: legging_noir,
		price: 6,
		labels: ['origine_france', 'fair_trade']
	},
	{
		name: 'T-shirt Running',
		category: 'Running',
		id: '7ie',
		cover: tshirt_running,
		price: 5,
		labels: ['b_corp', 'origine_france']
	},
	{
		name: 'Veste Running',
		category: 'Running',
		id: '9vn',
		cover: veste_running,
		price: 8,
		labels: ['b_corp', 'fair_trade']
	}
]